import { useEffect } from 'react';
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
  
  let loadedTronDisk;
  let loadedthreeManLJ;
  let loadedLightCycle;
  let loadedOneManLJ;

  useEffect(() => { (async () => {
    let currScrollPos = 0
    let scrollValue = 0
    let scrollPosition
    const windowAdjustment = 1845
    
    const handleCamera = () => { //Doesnt work lol

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
      loadedLightCycle.scene.position.x = CycleGC.x -53
      loadedLightCycle.scene.rotation.y = (CycleRotation *0.9)-0.4
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
      const [{ default: SceneInit }, { GLTFLoader }] = await Promise.all([
        import('../../lib/SceneInit'),
        import('three/examples/jsm/loaders/GLTFLoader.js'),
      ])
      const glftLoader = new GLTFLoader()
      mainScene = new SceneInit('myThreeJsCanvas', parentElement);
      mainScene.initialize();
      mainScene.animate();
      
      const loadModel = (path) => new Promise((resolve) => glftLoader.load(path, resolve))

      const [disk, threeJet, cycle, oneJet] = await Promise.all([
        loadModel(tronDisk3),
        loadModel(threeManLJ),
        loadModel(tron_light_cycle),
        loadModel(one_man_light_jet),
      ])

      // TRON DISK
      disk.scene.scale.set(6, 6, 6);
      disk.scene.position.set(-50, 0, -100);
      disk.scene.rotation.set(1.5, 0, 1.5);
      loadedTronDisk = disk;
      mainScene.scene.add(disk.scene);

      // 3MAN LIGHT JET
      threeJet.scene.scale.set(0.08, 0.08, 0.08);
      threeJet.scene.position.set(-75, 39, -5);
      loadedthreeManLJ = threeJet;
      mainScene.scene.add(threeJet.scene);

      // LIGHT CYCLE
      cycle.scene.scale.set(0.008, 0.008, 0.008);
      cycle.scene.position.set(-51, -1.3, 70);
      loadedLightCycle = cycle;
      mainScene.scene.add(cycle.scene);

      // OM LIGHT JET
      oneJet.scene.scale.set(0.0035, 0.0035, 0.0035);
      oneJet.scene.position.set(-51, -2.5, 78);
      oneJet.scene.rotation.set(-5, 0, -1.3);
      loadedOneManLJ = oneJet;
      mainScene.scene.add(oneJet.scene);

      handleCamera();

      const animate = () => {
        if (loadedTronDisk) { basicRotation(loadedTronDisk) };
        requestAnimationFrame(animate);
      };
      animate();
    }
    
    if (appContext){
      appContext.onscroll = () => {
        handleCamera()
      };
    }
  })(); }, [appContext]);
  
  

  return (
    <div >
        <canvas className="z-10" id="myThreeJsCanvas"/>
    </div>
  )
}

export default ModelsCanvas