import * as THREE from "three";
import * as CANNON from 'cannon';



export class Interactable {
    physicsBody; //Cannon physics body
    visualObject; //Three js mesh

    isCurrentlyHeld;
    holdingParent;

    frameRecordingAmount = 10;
    throwStrengthMultiplier = 1;
    frameCounter = 0;
    recordedDeltaTimes;
    recordedPositions;

    constructor(position) {
        const colliderShape = new CANNON.Box(new CANNON.Vec3(.1, .1, .1));
        this.physicsBody = new CANNON.Body({
            mass: 1,
            position: position
        });

        this.physicsBody.addShape(colliderShape);

        this.visualObject = new THREE.Mesh(new THREE.BoxGeometry(.2, .2, .2), new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } ));

        this.isCurrentlyHeld = false;
        this.recordedDeltaTimes = new Array(this.frameRecordingAmount);
        this.recordedPositions = new Array(this.frameRecordingAmount);
        this.recordedDeltaTimes.fill(0.0);
        this.recordedPositions.fill(undefined);
    }

    update(deltaTime) {
        if (this.isCurrentlyHeld) {
            this.physicsBody.position.copy(this.holdingParent.position);//new CANNON.Vec3(this.holdingParent.position.x, this.holdingParent.position.y, this.holdingParent.position.z);
            this.physicsBody.quaternion.copy(this.holdingParent.quaternion);

            this.recordedDeltaTimes[this.frameCounter] = deltaTime;
            this.recordedPositions[this.frameCounter] = this.visualObject.position;
            this.frameCounter = (this.frameCounter + 1) % this.frameRecordingAmount;
        }

        //Set visual object to mirror physics body position and rotation
        this.visualObject.position.copy(this.physicsBody.position);
        this.visualObject.quaternion.copy(this.physicsBody.quaternion);
    }

    distanceTo(targetPosition) {
        return this.visualObject.position.distanceTo(targetPosition);
    }

    pickUp(parent) {
        console.log("pick up");
        this.isCurrentlyHeld = true;
        this.holdingParent = parent;
        this.physicsBody.type = CANNON.Body.KINEMATIC;
    }

    release() {
        console.log("release");
    
        this.isCurrentlyHeld = false;
        this.holdingParent = undefined;
        this.physicsBody.type = CANNON.Body.DYNAMIC;

        let validCount = 0;
        let averageVelocity = new THREE.Vector3(0, 0, 0);
        for(let i = 1; i < this.frameRecordingAmount; i++) {
            if (this.recordedPositions[i] == undefined || this.recordedPositions[i - 1] == undefined) continue;
            let frameVelocity = new THREE.Vector3(0,0,0);
            frameVelocity.subVectors(this.recordedPositions[i - 1], this.recordedPositions[i]);
            frameVelocity = frameVelocity.divideScalar(this.recordedDeltaTimes[i]);
            averageVelocity = averageVelocity.add(frameVelocity);
            validCount++;
        }
        if (validCount > 0)
            averageVelocity = averageVelocity.divideScalar(validCount);



        this.physicsBody.velocity.copy(averageVelocity.multiplyScalar(this.throwStrengthMultiplier));

        this.recordedDeltaTimes.fill(0.0);
        this.recordedPositions.fill(undefined);
    }
}