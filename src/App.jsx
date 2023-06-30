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
function solveForX(y) {
  const a = -4;
  const b = 10 + 1; // 10x and x terms combined
  const c = 9500 - 1.5*y**2 + 10*y;

  const discriminant = Math.pow(b, 2) - (4 * a * c);

  if (discriminant < 0) {
      return 'No real solutions';
  } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

      return [x1, x2];
  }
}

// console.log(solveForX(0));





const basicRotation = (target) => {
  // loadedModel.scene.rotation.x += 0.01;
  target.scene.rotation.y += 0.03;
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

      //actual z = z - 100
      let y = loadedModel.scene.position.z = currScrollPos / 50
        let actualY = 82.9 -y
      let x = loadedModel.scene.position.x = solveForX(actualY)[1];
      // solveForX((-y+100))[1]
      //actual x = actual x
      console.log("y"+y,"x"+x)

      
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
      gltfScene.scene.rotation.x = 1.2
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