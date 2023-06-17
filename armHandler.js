import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Joint } from "./joint.js";

export class ArmHandler {
    //Arm objects
    armR;
    armL;

    //Joints
    jointsR = [];
    jointsL = [];
    jointLengths = [.9, .85, 0];

    //Roots = shoulder positions
    rootROffset = new THREE.Vector3(.12, -.15, .05);
    rootLOffset = new THREE.Vector3(-.12, -.15, .05);
    rootR = new THREE.Vector3(0, 0, 0);
    rootL = new THREE.Vector3(0, 0, 0);

    //Interactable
    interactableHoldObject;

    async initialize(scene, armOptions) {
        const gltfLoader = new GLTFLoader();
        this.armL = await this.loadObject("armL.glb", gltfLoader);
        this.armR = await this.loadObject("armR.glb", gltfLoader);

        this.createJoints(this.armR, this.jointsR, scene);
        this.createJoints(this.armL, this.jointsL, scene);

        this.createHoldPoint();

        this.resizeArm(armOptions.scale);
        this.offsetShoulders(armOptions.shoulderOffset);
    }

    //Update the arms to follow the controllers
    update(controllers) {
        this.updateJoints(this.jointsR, this.rootR, controllers[0]);
        this.updateJoints(this.jointsL, this.rootL, controllers[1]);
    }

    //creates an object with an offset to the wrist that can hold interactable objects
    createHoldPoint() {
        const wrist = this.jointsR[this.jointsR.length -1].jointObject;
        this.interactableHoldObject = new THREE.Mesh();//new THREE.Mesh(new THREE.SphereGeometry(.3), new THREE.MeshStandardMaterial( { color: 0x555000 } ));
        wrist.add(this.interactableHoldObject);
        this.interactableHoldObject.position.set(-.3, 0, -.3);
    }

    //Returns the world position of the hold point (point the interactable will follow when held)
    getInteractableHoldPoint() {
        let worldPosition = new THREE.Vector3();
        this.interactableHoldObject.getWorldPosition(worldPosition);
        return worldPosition;
    }

    //Load object asynchronously
    async loadObject(path, gltfLoader) {
        return new Promise((resolve) => {
            gltfLoader.load(path, (loadedObject) => { 
                resolve(loadedObject.scene);
            });
        });
    }

    //Creates joints of an arm
    createJoints(armObject, jointsArray, scene) {
        //armObject.children contains the joints in the right order (Shoulder, Elbow, Wrist)
        //children[0] can be used because the child gets removed from its former parent when it is appended to another object
        for (let i = 0; i < 3; i++) {
            //scale arm to simulate real arm length
            let joint = new Joint(this.jointLengths[i], armObject.children[0]);
            jointsArray.push(joint);
            scene.add(joint.jointObject);
        }
    }

    //Update root position so arms are always offset relative to the camera
    updateRootPositions(camera, renderer) {
        let cameraPos;
        if (renderer.xr.isPresenting) {
            cameraPos = renderer.xr.getCamera().cameras[0].position;
        } else {
            cameraPos = camera.position;
        }
        this.rootR.addVectors(cameraPos, this.rootROffset);
        this.rootL.addVectors(cameraPos, this.rootLOffset);
    }

    //Position of the wrist joint
    getWristPositionR() {
        return this.jointsR[this.jointsR.length - 1].jointObject.position;
    }

    //Returns the wrist object
    getWristObjectR() {
        return this.jointsR[this.jointsR.length -1].jointObject;
    }

    //Apply simplified inverse kinematics to set position and rotation of the joints
    updateJoints(joints, root, targetController) {
        //Set last joint (wrist) to target controllers position and rotation
        const targetPosition = targetController.position;
        const targetRotation = targetController.rotation;
        joints[joints.length - 1].setPosition(targetController.position.x, targetPosition.y, targetPosition.z);
        joints[joints.length - 1].jointObject.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);

        //Update position and rotation of joints
        //Rotate each joint towards the next joint then set the position so they connect
        for (let i = joints.length - 2; i >= 0; i--) {
            //Update rotation
            joints[i].lookAt(joints[i + 1].getPosition());

            //Update position
            const pos = joints[i + 1].getPosition();
            joints[i].setEndPosition(pos.x, pos.y, pos.z);
        }

        //Get the offset from where the shoulder joint should be to where it is
        let offset = new THREE.Vector3();
        offset.subVectors(joints[0].getPosition(), root);

        //Offset all joints by the calculated offset so the shoulder is always at the set root position
        for (let i = 0; i < joints.length; i++) {
            let newPos = new THREE.Vector3();
            newPos.subVectors(joints[i].getPosition(), offset);
            joints[i].setPosition(newPos.x, newPos.y, newPos.z);
        }
    }

    //Offsets shoulders on the x axis
    offsetShoulders(offset) {
        offset = parseFloat(offset);
        this.rootLOffset.x = -offset;
        this.rootROffset.x = offset;
    }

    //Resize arms
    resizeArm(scale) {
        scale = parseFloat(scale);
        for (let i = 0; i < 3; i++) {
            this.jointsR[i].jointObject.scale.set(scale, scale, scale);
            this.jointsL[i].jointObject.scale.set(scale, scale, scale);
        }
    }
}