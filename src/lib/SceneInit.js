import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';

class devCamera {
  constructor(type) {
    this.type = type

    switch (this.type) {
      case 1 : //Default 
      this.x = 50
      this.y = 20
      this.z = 160
        break;
      case 2 : //Production Preview
      this.x = 0
      this.y = 0
      this.z = 20
        break;
      case 3 : //Production Preview
      this.x = 0
      this.y = 5
      this.z = 20
        break;
      default:
        this.type = false;
    }

  }

}

export default class SceneInit {

  constructor(canvasId) {

    // NOTE: Dev options
    this.devCamera = new devCamera(1);
    this.devControls = true;
    this.devStats = false;

    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // NOTE: Camera params;
    this.fov = 110;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    // NOTE: Additional components.
    this.clock = undefined;
    this.stats = undefined;
    this.controls = undefined;

    // NOTE: Lighting is basically required.
    this.spotLight = undefined;
    this.ambientLight = undefined;
  }

  initialize() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      this.nearPlane,
      this.farPlane
    );

    if (this.devCamera.type){
      this.camera.position.x = this.devCamera.x;
      this.camera.position.y = this.devCamera.y;
      this.camera.position.z = this.devCamera.z;
    }

    // NOTE: Specify a canvas which is already created in the HTML.
    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      // NOTE: Anti-aliasing smooths out the edges.
      alpha: false,
      antialias: true,

    });
    this.composer = new EffectComposer(this.renderer)
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    if ( this.devControls === true ) this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    if ( this.devStats === true ) {this.stats = Stats(); document.body.appendChild(this.stats.dom);}

    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    // spot light which is illuminating the chart directly
    this.spotLight = new THREE.SpotLight(0xffffff, 1);
    this.spotLight.castShadow = true;
    this.spotLight.position.set(0, 64, 32);
    this.scene.add(this.spotLight);

    this.gridHelper = new THREE.GridHelper(200, 50);
    this.scene.add(this.gridHelper);

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);

    // NOTE: Declare uniforms to pass into glsl shaders.
    this.uniforms = {
      u_time: { type: 'f', value: 1.0 },
      colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
      colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
    };
  }

  animate() {
    // NOTE: Window is implied.
    // requestAnimationFrame(this.animate.bind(this));
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.devControls? this.controls.update() : undefined;
    this.devStats? this.stats.update() : undefined;
  }

  render() {
    // NOTE: Update uniform data on each render.
    this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
