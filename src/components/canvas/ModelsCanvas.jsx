import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../../lib/SceneInit';
import { solveForX, solveQE, getRotation } from '../../lib/utils';



const tronDisk = "/models/tron_disk/scene.gltf";

const tron_light_cycle = "/models/tron_moto_sdc/scene.gltf";
const tron_moto_sdc = "/models/tron_moto_sdc/scene.gltf";
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
  scroll = scroll + (100*(-ITEM_ID+1))

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
  let loadedLightCycle;
  
  useEffect(() => {
    
    let currScrollPos = 0
    let scrollValue = 0
    let scrollPosition
    const windowAdjustment = 1845
    
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
          const quadrant = Math.floor(((scrollPosition/100)%4) - id);
          const actualY = getY(scrollPosition, id) // Actual Y value on a graph calculator
            const y = mapGridToCanvasY(actualY) // - converts from grid to canvas grid
              loadedModel.scene.position.z = y + camAdjustment
          const actualX = loadedModel.scene.position.x = solveQE(y, quadrant, id)
            const x = actualX - 50           // - converts from grid to canvas grid
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
      } = handleModel(loadedTronDisk, 1, +3.7);
      loadedTronDisk.scene.rotation.z = -(tronDiskRotation -0.217);

      const {
        rotation: LJRotation,
        graphCords: LightJetGC
      } = handleModel(loadedthreeManLJ, 2, -25);
      loadedthreeManLJ.scene.rotation.y = (LJRotation -1.5);

      if (LightJetGC.x > 0 && LightJetGC.y > -100){// take y and return height
        let y = LightJetGC.y +50;
        let height = ((0.004 * (y*y)) - (0.4*y) + 9)
          loadedthreeManLJ.scene.position.y = height
        let rotationX
        let LJGC = Math.abs(LightJetGC.y)

        if (LightJetGC.y > 0){
          rotationX = (0.9*(Math.sqrt(2500 - (LJGC-50)*(LJGC-50))))-6;
        } else {
          rotationX = - (0.6*(Math.sqrt(2500 - (LJGC-50)*(LJGC-50))))-2
        }

          loadedthreeManLJ.scene.rotation.z = -rotationX/90
      } else {
        loadedthreeManLJ.scene.position.y = 39
      }

      const {
        rotation: CycleRotation,
        graphCords: CycleGC
      } = handleModel(loadedLightCycle, 3, 4);
      loadedLightCycle.scene.position.x = CycleGC.x -54
      loadedLightCycle.scene.rotation.y = (CycleRotation -0.3)
    }

    const mainScene = new SceneInit('myThreeJsCanvas');
    mainScene.initialize();
    mainScene.animate();

    // TRON DISK 
    glftLoader.load(tronDisk3, (gltfScene) => {
      loadedTronDisk = gltfScene;
      gltfScene.scene.scale.set(6, 6, 6);
      gltfScene.scene.position.x = -50
      gltfScene.scene.position.z = -100
      
      gltfScene.scene.rotation.x = 1.5
      gltfScene.scene.rotation.z = 1.5
      mainScene.scene.add(gltfScene.scene);
    });

    // 3MAN LIGHT JET
    glftLoader.load(threeManLJ, (gltfScene) => {
      loadedthreeManLJ = gltfScene;
      gltfScene.scene.scale.set(0.05, 0.05, 0.05);

      gltfScene.scene.position.y = 39
      gltfScene.scene.position.x = -75
      gltfScene.scene.position.z = -5
      mainScene.scene.add(gltfScene.scene);
    });

    // LIGHT CYCLE
    glftLoader.load(tron_light_cycle, (gltfScene) => {
      let scale = 0.008
      loadedLightCycle = gltfScene;

      gltfScene.scene.position.y = -0.8
      gltfScene.scene.position.x =  -51
      gltfScene.scene.position.z = 78

      gltfScene.scene.scale.set(scale,scale,scale);
      mainScene.scene.add(gltfScene.scene);
    });



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