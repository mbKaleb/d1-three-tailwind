import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../../lib/SceneInit';
import { solveForX, solveQE } from '../../lib/utils';
const tronDisk = "/models/tron_disk/scene.gltf";
const threeManLJ = "/models/three_man_light_jet_tron/scene.gltf";
const tronDisk3 = "/models/tron_disk3/scene.gltf";


const basicRotation = (target) => {
  target.scene.rotation.y += 0.04;
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
  let loadedTronDisk2;
  let loadedthreeManLJ;
  
  useEffect(() => {
    
    let currScrollPos = 0
    let scrollValue = 0
    
    const handleCamera = (ev) => { //Doesnt work lol
      if (appContext){
        scrollValue = appContext.children[0].getBoundingClientRect().top // Get distance from top of document, will be negative
      }
      
      if (scrollValue <= 0) {
        currScrollPos = Math.abs(scrollValue)
      }
      
      if(loadedTronDisk){
        const ITEM_ID = 1
        const SCROLLPOS = (currScrollPos/25);
        const quadrant = Math.floor(((SCROLLPOS/100)%4) + ITEM_ID);
        // console.log(quadrant)
        const y = mapGridToCanvasY(getY(SCROLLPOS, ITEM_ID)) // - converts from grid to canvas grid
          loadedTronDisk.scene.position.z = y
        const x = loadedTronDisk.scene.position.x = solveQE(y, quadrant, ITEM_ID) - 50  // - converts from grid to canvas grid
      }
      // if (loadedTronDisk2){
      //   const ITEM_ID = 2
      //   const SCROLLPOS = (currScrollPos/25);
      //   const quadrant = Math.floor(((SCROLLPOS/100)%4 + ITEM_ID));
      //   const y = loadedTronDisk2.scene.position.z = mapGridToCanvasY(getY(SCROLLPOS, ITEM_ID)) // - converts from grid to canvas grid
      //   const x = loadedTronDisk2.scene.position.x = solveQE(y, quadrant, ITEM_ID) // - converts from grid to canvas grid
      // }
      // if (loadedthreeManLJ){
      //   const ITEM_ID = 3
      //   const SCROLLPOS = (currScrollPos/25);
      //   const quadrant = Math.floor(((SCROLLPOS/100)%4 + ITEM_ID));
      //   const y = loadedthreeManLJ.scene.position.z = mapGridToCanvasY(getY(SCROLLPOS, ITEM_ID)) // - converts from grid to canvas grid
      //   const x = loadedthreeManLJ.scene.position.x = solveQE(y, quadrant, ITEM_ID) // - converts from grid to canvas grid
      // }

      prevScrollPos = currScrollPos;
    }

    const mainScene = new SceneInit('myThreeJsCanvas');
    mainScene.initialize();
    mainScene.animate();

    //TRON DISK //////////////////////////////////////
    glftLoader.load(tronDisk3, (gltfScene) => {
      loadedTronDisk = gltfScene;
      gltfScene.scene.scale.set(4, 4, 4);
      gltfScene.scene.rotation.y = 1.6
      gltfScene.scene.position.y = -2.6
      // gltfScene.scene.rotation.x = 1.1
      mainScene.scene.add(gltfScene.scene);
    });
    //////////////////////////////////////////////////


    
    //TRON DISK 2 //////////////////////////////////////
    // glftLoader.load(tronDisk, (gltfScene) => {
    //   loadedTronDisk2 = gltfScene;
    //   gltfScene.scene.scale.set(0.05, 0.05, 0.05);
    //   gltfScene.scene.rotation.x = 1.5
    //   mainScene.scene.add(gltfScene.scene);
    // });
    // //////////////////////////////////////////////////

    // //3MAN LIGHT JET //////////////////////////////////
    // glftLoader.load(threeManLJ, (gltfScene) => {
    //   loadedthreeManLJ = gltfScene;
    //   gltfScene.scene.scale.set(0.05, 0.05, 0.05);
    //   gltfScene.scene.rotation.x = 1.5
    //   mainScene.scene.add(gltfScene.scene);
    // });
    //////////////////////////////////////////////////

    
    

    const animate = () => {
      // if (loadedTronDisk) { basicRotation(loadedTronDisk)};
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