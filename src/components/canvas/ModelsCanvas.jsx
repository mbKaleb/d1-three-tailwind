import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../../lib/SceneInit';
import { solveForX, solveQE, getRotation } from '../../lib/utils';
const tronDisk = "/models/tron_disk/scene.gltf";
const threeManLJ = "/models/three_man_light_jet_tron/scene.gltf";
const tronDisk3 = "/models/tron_disk3/scene.gltf";


const basicRotation = (target) => {
  target.scene.rotation.y += 0.001;
  // target.scene.rotation.x += 0.01;
}

const getY = (scroll, ITEM_ID) => {
  scroll = scroll + (100*(ITEM_ID-1))

  let yValue  = 100 * Math.cos(3.1415/200 * scroll) //simple cosin wave with manitude of 400

  if (yValue > 100){yValue = 100}
  if (yValue <= -100){yValue = -100}
  // console.log("yValue: "+ yValue)
  // console.log("scroll: "+scroll)
  return yValue
}

const mapGridToCanvasY = (item) => {
  return -item
}


function ModelsCanvas(props) {
  const {appContext} = {...props}
  
  const glftLoader = new GLTFLoader();
  let prevScrollPos = 0;
  let loadedTronDisk;
  let loadedthreeManLJ;
  
  useEffect(() => {
    
    let currScrollPos = 0
    let scrollValue = 0
    const windowAdjustment = 2000
    
    const handleCamera = (ev) => { //Doesnt work lol
      if (appContext){
        scrollValue = appContext.children[0].getBoundingClientRect().top // Get distance from top of document, will be negative
      }
      
      if (scrollValue <= 0) {
        currScrollPos = (Math.abs(scrollValue) / (window.innerHeight/windowAdjustment))
      }
      
      
      if(loadedTronDisk){
        const ITEM_ID = 1
        const SCROLLPOS = (currScrollPos/25);
        const quadrant = Math.floor(((SCROLLPOS/100)%4) + ITEM_ID);

        const actualY = getY(SCROLLPOS, ITEM_ID) // Actual Y value on a graph calculator
          const y = mapGridToCanvasY(actualY) // - converts from grid to canvas grid
            loadedTronDisk.scene.position.z = y

        const actualX = loadedTronDisk.scene.position.x = solveQE(y, quadrant, ITEM_ID)
          const x = actualX - 49.1           // - converts from grid to canvas grid
            loadedTronDisk.scene.position.x = x
        
        //Rotation
        const actualRadians = getRotation(actualX, actualY)
          const rotation = -(actualRadians -0.1)
            loadedTronDisk.scene.rotation.z = rotation
      }


      if (loadedthreeManLJ){
        const ITEM_ID = 4
        const SCROLLPOS = (currScrollPos/25);
        const quadrant = Math.floor(((SCROLLPOS/100)%4) + ITEM_ID);

        const y  = mapGridToCanvasY(getY(SCROLLPOS, ITEM_ID)) // - converts from grid to canvas grid
          loadedthreeManLJ.scene.position.z = y -20
        const x = loadedthreeManLJ.scene.position.x = solveQE(y, quadrant, ITEM_ID) - 49.1 // - converts from grid to canvas grid
        //Custom swoop math
        const height = 0.02*((y*y)) - (y*0.45)
          loadedthreeManLJ.scene.position.y = height -5;
        if (y < 0){
          loadedthreeManLJ.scene.rotation.x = height/200
        } else {
          loadedthreeManLJ.scene.rotation.x = -((height/15))
        }
        //Rotation
      
      }

      prevScrollPos = currScrollPos;
    }

    const mainScene = new SceneInit('myThreeJsCanvas');
    mainScene.initialize();
    mainScene.animate();

    //TRON DISK //////////////////////////////////////
    glftLoader.load(tronDisk3, (gltfScene) => {
      loadedTronDisk = gltfScene;
      // gltfScene.scene.position.y = 100
      gltfScene.scene.scale.set(6, 6, 6);
      // gltfScene.scene.rotation.y = 7
      // gltfScene.scene.rotation.z = 1.5
      gltfScene.scene.rotation.x = 1.5
      // gltfScene.scene.position.z = 1.5

      mainScene.scene.add(gltfScene.scene);

    });
    //////////////////////////////////////////////////

    // //3MAN LIGHT JET //////////////////////////////////
    glftLoader.load(threeManLJ, (gltfScene) => {
      loadedthreeManLJ = gltfScene;
      gltfScene.scene.scale.set(0.05, 0.05, 0.05);
      gltfScene.scene.position.y = -1
      gltfScene.scene.rotation.z = -0.1
      gltfScene.scene.rotation.x = 0.3
      gltfScene.scene.rotation.y = -1.6
      mainScene.scene.add(gltfScene.scene);
    });
    //////////////////////////////////////////////////

    
    

    const animate = () => {
      if (loadedTronDisk) { basicRotation(loadedTronDisk)};
      requestAnimationFrame(animate);
    };
    animate();
    
    if (appContext){
      appContext.onscroll = (e) => {
        handleCamera(e)
      };
    }
  }, [appContext]);

  return (
    <div className='' >
        <canvas className='z-0' id="myThreeJsCanvas"/>
    </div>
  )
}

export default ModelsCanvas