import { useEffect } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const tronDisk = "/models/tron_disk/scene.gltf";
import AppContent from './components/AppContent';

const APP_CONTENT_ELEMENT = document.getElementById("app-content")

function App() {
  return (
    <div>
      <AppContent />
      
    </div>
  );
}

export default App;