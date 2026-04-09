import { useState, useEffect } from 'react';
import "@fontsource/orbitron";

import AppContent from './components/AppContent';
import FullHeader from './components/header/FullHeader';

function App() {
  const [elementState, setElementState] = useState()
  const [ModelsCanvas, setModelsCanvas] = useState(null)
  const [sceneLoaded, setSceneLoaded] = useState(false)

  let APP_CONTENT_ELEMENT = document.getElementById("app-content");
  useEffect(() => {
    setElementState(APP_CONTENT_ELEMENT)
  }, [APP_CONTENT_ELEMENT])

  useEffect(() => {
    import('./components/canvas/ModelsCanvas').then((mod) => {
      setModelsCanvas(() => mod.default)
      setSceneLoaded(true)
    })
  }, [])

  let PARENT_ELEMENT = document.getElementById("wrapper");

  return (
    <div id='wrapper' className="h-[100vh]" >
      {!sceneLoaded && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <span style={{ fontFamily: 'Orbitron, sans-serif' }} className="text-[#0FFFFA] text-sm tracking-widest animate-pulse">
            LOADING
          </span>
        </div>
      )}
      <FullHeader />
      <AppContent appContext={elementState} />
      {ModelsCanvas && <ModelsCanvas appContext={elementState} parentElement={PARENT_ELEMENT} />}
    </div>
  );
}
export default App;
