import * as THREE from "three";
import * as CANNON from 'cannon';

//Objects that can be picked up 
export class Interactable {
    physicsBody; //Cannon physics body
    visualObject; //Three js mesh

    isCurrentlyHeld;
    holdingParent; //Object to follow when held

    //Variables to keep track of the positions and delta times of the latest frames
    frameCounter = 0;
    recordedDeltaTimes;
    recordedPositions;

    frameRecordingAmount = 15;
    throwVelocityMultiplier = -3;

    constructor(position) {
        //Create physics body and visual object
        const colliderShape = new CANNON.Sphere(.07);
        this.physicsBody = new CANNON.Body({
            mass: 4,
            position: position
        });

        this.physicsBody.addShape(colliderShape);
        this.visualObject = new THREE.Mesh(new THREE.SphereGeometry(.07), new THREE.MeshStandardMaterial( { color: 0x555000 } ));

        this.isCurrentlyHeld = false;
        
        //create 2 arrays to store the position and time values and fill them with default values
        this.recordedDeltaTimes = new Array(this.frameRecordingAmount);
        this.recordedPositions = new Array(this.frameRecordingAmount);
        this.recordedDeltaTimes.fill(0.0);
        this.recordedPositions.fill(undefined);
    }

    update(deltaTime) {
        //When currently held record the delta time and object position of the frame and
        //match the position of the object that holds it in world space
        // the frame counter is increasing every frame up to the specified amount and reset back to 0 afterwards
        if (this.isCurrentlyHeld) {
            let worldPosition = new THREE.Vector3();
            this.holdingParent.getWorldPosition(worldPosition);
            
            this.physicsBody.position.copy(worldPosition);

            this.recordedDeltaTimes[this.frameCounter] = deltaTime;
            let position = new THREE.Vector3().copy(this.visualObject.position)
            this.recordedPositions[this.frameCounter] = position;
            
            this.frameCounter = (this.frameCounter + 1) % this.frameRecordingAmount;
        }

        //Set visual object to mirror physics body position and rotation
        this.visualObject.position.copy(this.physicsBody.position);
        this.visualObject.quaternion.copy(this.physicsBody.quaternion);
    }

    //Returns distance to position
    distanceTo(targetPosition) {
        return this.visualObject.position.distanceTo(targetPosition);
    }

    //Set reference to the holding object and set physics body to kinematic
    pickUp(parent) {
        this.isCurrentlyHeld = true;
        this.holdingParent = parent;
        
        this.physicsBody.type = CANNON.Body.KINEMATIC;
    }

    release() {
        this.isCurrentlyHeld = false;
        this.holdingParent = undefined;
        this.physicsBody.type = CANNON.Body.DYNAMIC;

        let validCount = 0;
        let averageVelocity = new THREE.Vector3(0, 0, 0);

        //Offset index so the latest entry offset to the end of the array
        const indexOffset = this.frameRecordingAmount - this.frameCounter;

        //Calculate velocity between using recorded positions and delta times
        for(let i = 1; i < this.frameRecordingAmount; i++) {
            //shift all indices by the offset and reset back to 0 after it reaches the max value
            let index = (i + indexOffset) % this.frameCounter;
           
            //If the position of this or the previous frame is undefined, cant calculate a velocity so ignore this entry
            if (this.recordedPositions[index] == undefined || this.recordedPositions[index - 1] == undefined) continue;
            //Calculate the velocity by using the position and delta time values
            let frameVelocity = new THREE.Vector3();
            frameVelocity.subVectors(this.recordedPositions[index - 1], this.recordedPositions[index]);
            frameVelocity.divideScalar(this.recordedDeltaTimes[index]);
            //Add up velocities and increase the valid count if the positions werent undefined
            averageVelocity.add(frameVelocity);
            validCount++;
        }
        //Get average by using the valid count
        if (validCount > 0)
            averageVelocity.divideScalar(validCount);

        //Apply a multiplier to the final velocity, then apply the velocity to the physics body
        this.physicsBody.velocity.copy(averageVelocity.multiplyScalar(this.throwVelocityMultiplier));

        //Reset variables 
        this.frameCounter = 0;
        this.recordedDeltaTimes.fill(0.0);
        this.recordedPositions.fill(undefined);
    }
}