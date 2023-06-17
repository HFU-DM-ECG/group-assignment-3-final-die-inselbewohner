import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory';
import { Interactable } from "./interactable.js";
import { ArmHandler } from './armHandler.js';
import Stats from 'three/addons/libs/stats.module.js';
import * as CANNON from 'cannon';
import GUI from 'lil-gui';

const stats = new Stats();

//Physics
const physicsWorld = new CANNON.World();

//Interactables
const interactionDistance = 0.2;
let interactables = [];
let interactableInRangeR;
let heldObjectR;
const interactableAmount = 10;

//Setup
let scene, camera, renderer;
let controls;
let controllers;
const showControllers = false;
let prevTime = 0;

//Arms
const armHandler = new ArmHandler();
const armOptions = {
    scale: 0.3,
    shoulderOffset: 0.25,
}

//Cans
let cans = [];
const cansRootPosition = new THREE.Vector3(0, 1.65, -4);
const canOffset = 0.25;
const canRowOffset = .2;
const canRows = 7;


initialize();

async function initialize() {
    initThree();
    initCannon();
    initScene();
    initGUI();
    await armHandler.initialize(scene, armOptions);

    renderer.setAnimationLoop(animate);
}

//Called every frame
function animate(time) {
    //Update arms
    armHandler.updateRootPositions(camera, renderer);
    armHandler.update(controllers);

    time *= 0.001;
    let deltaTime = time - prevTime;
    prevTime = time;

    //Only use orbit controls when xr is not active
    controls.enabled = !renderer.xr.isPresenting;

    stats.update();

    //Update closest interactable 
    interactableInRangeR = getClosestInteractableInRange(armHandler.getInteractableHoldPoint());

    updatePhysics(deltaTime);
    renderer.render(scene, camera);
}
//Sets up everything three js related
function initThree() {
    //Scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 3;
    camera.position.y = 1.5;

    //VR
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.xr.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", onWindowResize)
    renderer.outputEncoding = THREE.sRGBEncoding;
    document.body.appendChild(renderer.domElement);
    document.body.appendChild(VRButton.createButton(renderer));
    controllers = buildControllers();

    //Lights
    const ambientLight = new THREE.AmbientLight(0x606060, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x404040, 2, 50);
    pointLight.position.setZ(3);
    scene.add(pointLight);

    //Grid helper
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    //First person control
    controls = new OrbitControls(camera, renderer.domElement);

    //Stats
    document.body.appendChild(stats.dom);
}


//Initialize physics
function initCannon() {
    physicsWorld.gravity.set(0, -9.81, 0);
    physicsWorld.broadphase = new CANNON.NaiveBroadphase();
    physicsWorld.solver.iterations = 10;
}

function initScene() {
    // Ground plane
    let groundShape = new CANNON.Plane();
    let groundBody = new CANNON.Body({ mass: 0, position: new CANNON.Vec3(0, 0, 0) });
    groundBody.addShape(groundShape);
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    physicsWorld.addBody(groundBody);

    let groundMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
    let groundGeometry = new THREE.PlaneGeometry(10, 10);
    let groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    scene.add(groundMesh);

    //Set ground plane mesh to match the physics object position and rotation
    groundMesh.position.copy(groundBody.position);
    groundMesh.quaternion.copy(groundBody.quaternion);

    // Table
    let tablePhysicsBody = new CANNON.Body({ mass: 0, position: new CANNON.Vec3(0, 0, -1) });
    let tableColliderShape = new CANNON.Box(new CANNON.Vec3(2, .7, .7));
    tablePhysicsBody.addShape(tableColliderShape);
    physicsWorld.add(tablePhysicsBody);
    let tableMesh = new THREE.Mesh(new THREE.BoxGeometry(4, 1.4, 1.4), new THREE.MeshStandardMaterial({ color: 0x333333 }));
    tableMesh.position.copy(tablePhysicsBody.position);
    scene.add(tableMesh);

    // Can holder
    let canTablePhysicsBody = new CANNON.Body({
        mass: 0,
        position: new CANNON.Vec3(0, 1.5, -4),
    });
    let canTableColliderShape = new CANNON.Box(new CANNON.Vec3(2, 0.05, .2));
    canTablePhysicsBody.addShape(canTableColliderShape);
    physicsWorld.add(canTablePhysicsBody);
    let canTableMesh = new THREE.Mesh(new THREE.BoxGeometry(4, .1, .4), new THREE.MeshStandardMaterial({ color: 0x777777 }));
    canTableMesh.position.copy(canTablePhysicsBody.position);
    scene.add(canTableMesh);

    createCans();
    createInteractables();
}
//Sets up gui
function initGUI() {
    const gui = new GUI();
    gui.add(armOptions, "scale", 0.1, 0.5, 0.05).onChange(scale => armHandler.resizeArm(scale));
    gui.add(armOptions, "shoulderOffset", 0.05, 0.3, 0.05).onChange(offset => armHandler.offsetShoulders(offset));
}

//Remove interactables and cans from the world and create them again with their default values
function resetScene() {
    interactables.forEach(interactable => {
        physicsWorld.remove(interactable.physicsBody);
        scene.remove(interactable.visualObject);
    });
    interactables = [];
    createInteractables();

    cans.forEach(can => {
        physicsWorld.remove(can.physicsBody);
        scene.remove(can.visualObject);
    });
    cans = [];
    createCans();
}

//Index is the controller index (0 is left, 1 is right)
//Triggered when controller button is pressed down
//Left button resets the scene
//Right button picks up an interactable if one is in range
function onControllerButtonDown(index) {
    switch (index) {
        case 0:
            resetScene();
            break;
        case 1:
            if (interactableInRangeR == undefined) return; //Nothing to pick up
            //Pick up the object, pass in the parent to attach to
            interactableInRangeR.pickUp(armHandler.interactableHoldObject);
            //Keep track of the currently held object
            heldObjectR = interactableInRangeR;
            break;
    }

}

//Index is the controller index (0 is left, 1 is right)
function onControllerButtonUp(index) {
    if (index == 1) {
        if (heldObjectR == undefined) return;
        heldObjectR.release();
        heldObjectR = undefined;
    }
}

// loop over each interactables to find the closest interactable to the given position
// that is within interaction distance
function getClosestInteractableInRange(position) {
    let closestInteractable = undefined;
    let closestDistance = interactionDistance;
    interactables.forEach(interactable => {
        let distance = interactable.distanceTo(position);
        if (distance < closestDistance) {
            closestInteractable = interactable;
            closestDistance = distance;
        }
    });
    return closestInteractable;
}

//Create and add interactables to the scene and physics system
function createInteractables() {
    const interactableOffset = 0.25;
    const rootPosition = new THREE.Vector3(-0.5 * interactableAmount * interactableOffset, 1.4, -0.5);
    for (let i = 0; i < interactableAmount; i++) {
        const interactable = new Interactable(new CANNON.Vec3(rootPosition.x + interactableOffset * i, rootPosition.y, rootPosition.z));
        interactables.push(interactable);
        physicsWorld.add(interactable.physicsBody);
        scene.add(interactable.visualObject);
    }

}

// generate Can Objects to form a pyramid by offsetting each row and reducing the number of cans in subsequent rows by 1
function createCans() {
    let currentCanAmount = canRows;
    let offsetToCenter = canRows * canOffset * 0.5;
    for (let rowIndex = 0; rowIndex < canRows; rowIndex++) {

        for (let canIndex = 0; canIndex < currentCanAmount; canIndex++) {
            let offset = canOffset * 0.5 * rowIndex + canOffset * canIndex;
            let canPhysicsBody = new CANNON.Body({
                mass: 1,
                position: new CANNON.Vec3(offset + cansRootPosition.x - offsetToCenter, canRowOffset * rowIndex + cansRootPosition.y, cansRootPosition.z),
            });
            let canColliderShape = new CANNON.Box(new CANNON.Vec3(.1, .1, .1));
            canPhysicsBody.addShape(canColliderShape);
            physicsWorld.add(canPhysicsBody);
            let canMesh = new THREE.Mesh(new THREE.BoxGeometry(.2, .2, .2), new THREE.MeshStandardMaterial({ color: 0x333333 }));
            canMesh.position.copy(canPhysicsBody.position);
            canMesh.quaternion.copy(canPhysicsBody.quaternion);
            cans.push({ physicsBody: canPhysicsBody, visualObject: canMesh });
            scene.add(canMesh);
        }
        currentCanAmount--;
    }
}

//step the physics world. Then update all the visual objects from three js
//to fit the position and rotation of their respective physics body
function updatePhysics(deltaTime) {
    physicsWorld.step(deltaTime);

    interactables.forEach(interactable => {
        interactable.update(deltaTime);
    });
    cans.forEach(can => {
        can.visualObject.position.copy(can.physicsBody.position);
        can.visualObject.quaternion.copy(can.physicsBody.quaternion);
    });
}
//build two controllers and add them to the scene
function buildControllers() {
    const controllerModelFactory = new XRControllerModelFactory();
    const controllers = [];

    for (let i = 0; i < 2; i++) {
        const controller = renderer.xr.getController(i);
        controller.userData.selectPressed = false;
        controller.userData.selectPressedPrev = false;
        scene.add(controller);
        controllers.unshift(controller);
        controller.addEventListener('selectstart', () => onControllerButtonDown(i));
        controller.addEventListener('selectend', () => onControllerButtonUp(i));
        const grip = renderer.xr.getControllerGrip(i);
        grip.add(controllerModelFactory.createControllerModel(grip));
        if (showControllers)
            scene.add(grip);
    }
    return controllers;
}
//Reacts to resize event, doesn't work in VR
function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = width / height;

    renderer.setSize(width, height);

    camera.aspect = aspect;
    camera.updateProjectionMatrix();
}