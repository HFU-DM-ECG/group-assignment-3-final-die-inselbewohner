# WebXR Assignment 3 - Final Project
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E5ATIiJe)

## Application
https://hfu-dm-ecg.github.io/group-assignment-3-final-die-inselbewohner/
## Explanation
This VR application showcases the implemantation of virtual arms which can be controlled with controllers and simplified inverse kinematics. We also added a physics engine to interact with other objects in the scene. Interactable objects can be picked up by checking whether they are within interaction distance of the right hand. When objects are picked up, their position and the deltatime of each frame is stored in arrays and used to calculate a velocity with the last few positions when the object is released. Objects can be thrown at cans to knock them down. The scene can be reset by pressing a button on a controller.


## Usage
- Requires a VR Headset + Controllers or the WebXR Browser Plugin (Requires two Controllers)
- Install three.js and vite
- Visit our application on github pages
- Move the controllers to move the arms
- Arm size, shoulder offset, throw strength and the recorded frames can be adjusted by using sliders
- Only with the right controller you can hold and throw the interactable objects by holding the button and releasing it when you want to throw
- Press the button on the left controller to reset the scene

## Run locally
- Requires npm 
- run npm install
- run npx vite to host the page and open it in your browser