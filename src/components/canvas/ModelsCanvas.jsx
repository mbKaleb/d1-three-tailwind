import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../../lib/SceneInit';
import { solveQE, getRotation } from '../../lib/utils';

const tron_light_cycle = "/models/tron_moto_sdc/scene.gltf";
const one_man_light_jet = "/models/one_man_light_jet_tron/scene.gltf";
const threeManLJ = "/models/three_man_light_jet_tron/scene.gltf";
const tronDisk3 = "/models/tron_disk3/scene.gltf";


const basicRotation = (target) => {
  target.scene.rotation.y += 0.0015;
}

const getY = (scroll, ITEM_ID) => {
  scroll = scroll + (100*(-ITEM_ID+1))

  let yValue  = 100 * Math.cos(3.1415/200 * scroll) //simple cosin wave with manitude of 400

  if (yValue > 100){yValue = 100}
  if (yValue <= -100){yValue = -100}
  return yValue
}


function ModelsCanvas(props) {
  const {appContext, parentElement} = {...props}
  
  const glftLoader = new GLTFLoader();

  let loadedTronDisk;
  let loadedthreeManLJ;
  let loadedLightCycle;
  let loadedOneManLJ;
  
  useEffect(() => {
    let currScrollPos = 0
    let scrollValue = 0
    let scrollPosition
    const windowAdjustment = 1845
    
    const handleCamera = (ev) => { //Doesnt work lol

      //Handle Scroll Bar
      if (appContext){
        scrollValue = appContext.children[0].getBoundingClientRect().top // Get distance from top of document, will be negative
        currScrollPos = (Math.abs(scrollValue) / (parentElement.offsetHeight/windowAdjustment))
        scrollPosition = currScrollPos/25
      }

      //Relate Scroll Data to models
      const handleModel = (loadedModel=null, id, camAdjustment) => {
        if (loadedModel){
          const quadrant = Math.floor(((scrollPosition/100)%4) - id);
          const actualY = getY(scrollPosition, id) // Actual Y value on a graph calculator
            const y = -(actualY) // - converts from grid to canvas grid
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
      console.log(tronDiskGC)
      loadedTronDisk.scene.rotation.z = -(tronDiskRotation -0.217);

      const {
        rotation: LJRotation,
        graphCords: LightJetGC
      } = handleModel(loadedthreeManLJ, 2, -15);
      loadedthreeManLJ.scene.rotation.y = (LJRotation -1.5);

      if (LightJetGC.x > 0 && LightJetGC.y > -100){// take y and return height
        let y = LightJetGC.y +50;
        let height = ((0.004 * (y*y)) - (0.4*y) -1)
          loadedthreeManLJ.scene.position.y = height
        let rotationX
        let LJGC = Math.abs(LightJetGC.y)

        if (LightJetGC.y > 0){
          rotationX = (0.9*(Math.sqrt(2500 - (LJGC-50)*(LJGC-50))));
        } else {
          rotationX = -(0.4*(Math.sqrt(2500 - (LJGC-50)*(LJGC-50))))+3.324;
        }

          loadedthreeManLJ.scene.rotation.z = -rotationX/90
      } else {
        loadedthreeManLJ.scene.position.y = 31
      }

      const {
        rotation: CycleRotation,
        graphCords: CycleGC
      } = handleModel(loadedLightCycle, 3, 4);
      loadedLightCycle.scene.position.x = CycleGC.x -54
      loadedLightCycle.scene.rotation.y = (CycleRotation -0.3)
      if (CycleGC.x > 30 && CycleGC.y > -25){
        mainScene.turnOffLights()
      } else { mainScene.turnOnLights() }

      const {
        rotation: OMLJRotation,
        graphCords: OMLJGC
      } = handleModel(loadedOneManLJ, 4, 6.1);
      loadedOneManLJ.scene.rotation.y = (CycleRotation -3.3)
      if (scrollPosition < 30) {
        loadedOneManLJ.scene.position.z = 300
      }

    }

    let mainScene
    if (parentElement){
      mainScene = new SceneInit('myThreeJsCanvas', parentElement);
      mainScene.initialize();
      mainScene.animate();
      
      // TRON DISK 
      glftLoader.load(tronDisk3, (gltfScene) => {
        let scale = 6; let position = gltfScene.scene.position; let rotation = gltfScene.scene.rotation
        gltfScene.scene.scale.set(scale, scale, scale);
        loadedTronDisk = gltfScene;
        
        position.x = -50; position.z = -100;
        rotation.x = 1.5; rotation.z = 1.5
        mainScene.scene.add(gltfScene.scene);
      });
      
      // 3MAN LIGHT JET
      glftLoader.load(threeManLJ, (gltfScene) => {
        let scale = 0.08; let position = gltfScene.scene.position;
        gltfScene.scene.scale.set(scale,scale,scale);
        loadedthreeManLJ = gltfScene;
        
        position.y = 39; position.x = -75; position.z = -5
        mainScene.scene.add(gltfScene.scene);
      });
      
      // LIGHT CYCLE
      glftLoader.load(tron_light_cycle, (gltfScene) => {
        let scale = 0.008; let position = gltfScene.scene.position
        gltfScene.scene.scale.set(scale,scale,scale);
        loadedLightCycle = gltfScene;
        
        position.y = -0.8; position.x =  -51; position.z = 78
        mainScene.scene.add(gltfScene.scene);
      });
      
      // OM LIGHT JET
      glftLoader.load(one_man_light_jet, (gltfScene) => {
        let scale = 0.0035; let position = gltfScene.scene.position; let rotation = gltfScene.scene.rotation
        gltfScene.scene.scale.set(scale,scale,scale);
        loadedOneManLJ = gltfScene;
        
        position.y = -2.5; position.x =  -51; position.z = 78
        rotation.x = - 5; rotation.z = - 1.3
        mainScene.scene.add(gltfScene.scene);
      });
      
      const animate = () => {
        if (loadedTronDisk) { basicRotation(loadedTronDisk) };
        requestAnimationFrame(animate);
      };
      animate();
    }
    
    if (appContext){
      appContext.onscroll = (e) => {
        handleCamera(e)
      };
    }
  }, [appContext]);
  
  

  return (
    <div>
        <canvas className=' z-10' id="myThreeJsCanvas"/>
    </div>
  )
}

export default ModelsCanvas