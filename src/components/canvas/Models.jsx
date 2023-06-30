import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../../lib/SceneInit';

const APP_CONTENT_ELEMENT = document.getElementById("app-content")
const tronDisk = "/models/tron_disk/scene.gltf";

const basicRotation = (target) => {
  target.scene.rotation.y += 0.04;
}


function Models() {
  const glftLoader = new GLTFLoader();
  let prevScrollPos = 0;
  let loadedModel;
  
  const handleCamera = (ev) => { //Doesnt work lol
    const scrollValue = document.body.getBoundingClientRect().top // Get distance from top of document, will be negative
    let currScrollPos = 0

    if (scrollValue <= 0) {
      currScrollPos = Math.abs(scrollValue)
    }

    if(loadedModel){
      let y = loadedModel.scene.position.z = currScrollPos / 50
        let actualY = 82.9 -y
      let x = loadedModel.scene.position.x = solveForX(actualY)[1] +1;
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
      gltfScene.scene.rotation.x = 1.4
      mainScene.scene.add(gltfScene.scene);
    });
    
    //TRON DISK //////////////////////////////////////
    
    
    const animate = () => {
      if (loadedModel) { basicRotation(loadedModel)};
      requestAnimationFrame(animate);
    };animate();
    
    APP_CONTENT_ELEMENT?.focus();
  }, []);
  
  onscroll = (e) => {
    handleCamera(e)
  };

  return (
    <div>
        <canvas id="myThreeJsCanvas"/>
    </div>
  )
}

export default Models