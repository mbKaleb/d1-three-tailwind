import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../../lib/SceneInit';
import { solveForX } from '../../lib/utils';
const tronDisk = "/models/tron_disk/scene.gltf";


const basicRotation = (target) => {
  target.scene.rotation.y += 0.04;
}


function ModelsCanvas(props) {
  const {appContext} = {...props}
  useEffect(() => {

  }, [appContext])
  
  const glftLoader = new GLTFLoader();
  let prevScrollPos = 0;
  let loadedModel;
  
  useEffect(() => {
  const handleCamera = (ev) => { //Doesnt work lol
    let scrollValue
    if (appContext){
      scrollValue = appContext.children[0].getBoundingClientRect().top // Get distance from top of document, will be negative
    }
    console.log(scrollValue)
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
    };
    animate();
    
    if (appContext){
      appContext.onscroll = (e) => {
        handleCamera(e)
      };
    }
    console.log(appContext)
  }, [appContext]);

  return (
    <div className='' >
        <canvas className='z-0' id="myThreeJsCanvas"/>
    </div>
  )
}

export default ModelsCanvas