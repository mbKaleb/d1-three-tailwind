import { useState, useEffect } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const tronDisk = "/models/tron_disk/scene.gltf";
import AppContent from './components/AppContent';
import ModelsCanvas from './components/canvas/ModelsCanvas';



function App() {

  const [elementState, setElementState] = useState()
    let APP_CONTENT_ELEMENT = document.getElementById("app-content");
    useEffect(() => {
      setElementState(APP_CONTENT_ELEMENT)
    }, [APP_CONTENT_ELEMENT])


  return (
    <div>
      <AppContent appContext={elementState} />
      <ModelsCanvas appContext={elementState} />
    </div>
  );
}

export default App;