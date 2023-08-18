import { useState, useEffect } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const tronDisk = "/models/tron_disk/scene.gltf";
import AppContent from './components/AppContent';
import ModelsCanvas from './components/canvas/ModelsCanvas';
import FullHeader from './components/header/FullHeader';


function App() {

  const [elementState, setElementState] = useState()
    let APP_CONTENT_ELEMENT = document.getElementById("app-content");
    useEffect(() => {
      setElementState(APP_CONTENT_ELEMENT)
    }, [APP_CONTENT_ELEMENT])

    let PARENT_ELEMENT = document.getElementById("wrapper");
  if (screen.width < window.innerWidth){

  }


  return (
    <div id='wrapper'>
      <FullHeader />
      <AppContent appContext={elementState} />
      <ModelsCanvas appContext={elementState} parentElement={PARENT_ELEMENT} />
    </div>
  );
}

export default App;