import { useEffect } from 'react';

import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const tronDisk = "/models/tron_disk/scene.gltf";

// @ts-ignore 
import SceneInit from './lib/SceneInit';

//Utils for solving quadratics
function solveForY(x) {
  // Calculate the discriminant
  let discriminant = Math.pow(-10, 2) - 4 * 0.8 * -(-2 * Math.pow(x, 2) + x + 5000);
  if (discriminant < 100) {return 15}
  
  // Calculate the two possible solutions for y
  let y1 = ((-(-10) + Math.sqrt(discriminant)) / (2 * 0.6));
  
  // Return the solutions
  if (y1 > 0) {return y1} else return .1
}




const basicRotation = (target) => {
  // loadedModel.scene.rotation.x += 0.01;
  target.scene.rotation.y += 0.09;
  // loadedModel.scene.rotation.z += 0.001;
}



function App() {

  const glftLoader = new GLTFLoader();
  let prevScrollPos = 0;
  let loadedModel;
  
  const handleCamera = (ev) => { //Doesnt work lol
    const scrollValue = document.body.getBoundingClientRect().top // Get distance from top of document, will be negative
    let currScrollPos = 0

    if (scrollValue <= 0) {
      currScrollPos = Math.abs(scrollValue)

    }


    // 2500 - x^2 = y^2
    if(loadedModel){

      let x = loadedModel.scene.position.x = currScrollPos / 40
      let y = loadedModel.scene.position.z = 100 - solveForY(x);

      
    }

    prevScrollPos = currScrollPos;
  }

  useEffect(() => {
    const mainScene = new SceneInit('myThreeJsCanvas');
    mainScene.initialize();
    mainScene.animate();
    
    //TRON DISK //////////////////////////////////////
    glftLoader.load(tronDisk, (gltfScene) => {
      loadedModel = gltfScene;
      gltfScene.scene.scale.set(0.05, 0.05, 0.05);
      gltfScene.scene.rotation.x = 0.9
      mainScene.scene.add(gltfScene.scene);
    });

    //




    const animate = () => {
      if (loadedModel) { basicRotation(loadedModel)};
      requestAnimationFrame(animate);
    };animate();

  }, []);
  
  onscroll = (e) => {
    handleCamera(e)
  };
  
  document.body.style.height = '1000vh';
  return (
    <div>
      <canvas id="myThreeJsCanvas"  />
    </div>
  );
}

export default App;