import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../../lib/SceneInit';
import { solveForX, solveQE, getRotation } from '../../lib/utils';
const tronDisk = "/models/tron_disk/scene.gltf";
const threeManLJ = "/models/three_man_light_jet_tron/scene.gltf";
const tronDisk3 = "/models/tron_disk3/scene.gltf";


const basicRotation = (target) => {
  target.scene.rotation.y += 0.002;
}
const basicWobble = target => {
  // target.scene.rotation.x += 0.001;
  // target.scene.rotation.y += 0.001;
  // target.scene.rotation.z += 0.002;
}

const getY = (scroll, ITEM_ID) => {
  scroll = scroll + (100*(ITEM_ID-1))

  let yValue  = 100 * Math.cos(3.1415/200 * scroll) //simple cosin wave with manitude of 400

  if (yValue > 100){yValue = 100}
  if (yValue <= -100){yValue = -100}
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
    let scrollPosition
    const windowAdjustment = 2000
    
    const handleCamera = (ev) => { //Doesnt work lol

      //Handle Scroll Bar
      if (appContext){
        scrollValue = appContext.children[0].getBoundingClientRect().top // Get distance from top of document, will be negative
        currScrollPos = (Math.abs(scrollValue) / (window.innerHeight/windowAdjustment))
        scrollPosition = currScrollPos/25
      }

      //Relate Scroll Data to models
      const handleModel = (loadedModel=null, id, camAdjustment) => {
        if (loadedModel){
          const quadrant = Math.floor(((scrollPosition/100)%4) + id);

          const actualY = getY(scrollPosition, id) // Actual Y value on a graph calculator
            const y = mapGridToCanvasY(actualY) // - converts from grid to canvas grid
              loadedModel.scene.position.z = y + camAdjustment

          const actualX = loadedModel.scene.position.x = solveQE(y, quadrant, id)
            const x = actualX - 49.1           // - converts from grid to canvas grid
              loadedModel.scene.position.x = x
          
          //Rotation
          const actualRadians = getRotation(actualX, actualY)

          return (
            {
              "graphCords": {"y":actualY,"x":actualX},
              "rotation": actualRadians
            }
            )
        }
      }
      const {
        rotation: tronDiskRotation,
        graphCords: tronDiskGC
      } = handleModel(loadedTronDisk, 1, 0);
      loadedTronDisk.scene.rotation.z = -(tronDiskRotation -0.1)

      const {
        rotation: LJRotation,
        graphCords: LightJetGC
      } = handleModel(loadedthreeManLJ, 4, -20);
      loadedthreeManLJ.scene.rotation.y = (LJRotation -1.5)

      if (LightJetGC.x > 0 && LightJetGC.y > -50){// take y and return height
        let y = LightJetGC.y +50;
        let height = ((0.004 * (y*y)) - (0.4*y) + 9)
          loadedthreeManLJ.scene.position.y = height
        let rotationX
        if (LightJetGC.y >= 0){
          rotationX = (0.9*(Math.sqrt(2500 - (LightJetGC.y-50)*(LightJetGC.y-50))))-4;
        } else {
          let LJGC = Math.abs(LightJetGC.y)
          rotationX = -(0.5*(Math.sqrt(2500 - (LJGC-50)*(LJGC-50))))+2
        }
          loadedthreeManLJ.scene.rotation.z = -rotationX/90
      }
      prevScrollPos = currScrollPos;
    }

    const mainScene = new SceneInit('myThreeJsCanvas');
    mainScene.initialize();
    mainScene.animate();

    //TRON DISK //////////////////////////////////////
    glftLoader.load(tronDisk3, (gltfScene) => {
      loadedTronDisk = gltfScene;
      gltfScene.scene.scale.set(6, 6, 6);
      gltfScene.scene.position.x = -50
      gltfScene.scene.position.z = -100
      // gltfScene.scene.position.y = 50
      gltfScene.scene.rotation.x = 1.5
      mainScene.scene.add(gltfScene.scene);
    });
    //////////////////////////////////////////////////

    // //3MAN LIGHT JET //////////////////////////////////
    glftLoader.load(threeManLJ, (gltfScene) => {
      loadedthreeManLJ = gltfScene;
      gltfScene.scene.scale.set(0.05, 0.05, 0.05);
      gltfScene.scene.position.y = 6
      // gltfScene.scene.rotation.z = -0.1
      // gltfScene.scene.rotation.x = -0.3
      // gltfScene.scene.rotation.y = -1.6
      mainScene.scene.add(gltfScene.scene);
    });
    //////////////////////////////////////////////////0.0018x^{2}-0.2x\ +\ 2 exit 111

    const animate = () => {
      if (loadedTronDisk) { basicRotation(loadedTronDisk) };
      if (loadedthreeManLJ) { basicWobble(loadedthreeManLJ) };
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