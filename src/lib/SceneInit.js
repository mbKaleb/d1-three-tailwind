import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
			import { ColorCorrectionShader } from 'three/addons/shaders/ColorCorrectionShader.js';
			import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';


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
      this.z = 10
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

  constructor(canvasId, appContext) {


    this.width = undefined;
    this.height = undefined;
    this.appContext = document.getElementById("wrapper");

    if (appContext){
      this.width = window.innerWidth
      this.height = window.innerHeight
    }

    // NOTE: Dev options
    this.devCamera = new devCamera(2);
    this.devControls = false;
    this.devStats = false;

    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    this.whichComposer = "primary"

    this.primaryComposer = undefined;
    this.secondaryComposer = undefined;

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
      this.width / this.height,
      this.nearPlane,
      this.farPlane
    );

    if (this.devCamera.type){
      this.camera.position.x = this.devCamera.x;
      this.camera.position.y = this.devCamera.y;
      this.camera.position.z = this.devCamera.z;
    }

    // NOTE: Specify a canvas which is already created in the HTML.
    this.canvas = document.getElementById(this.canvasId);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true});
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( this.width, this.height );
      // this.renderer.autoClear = false;
    
    this.primaryComposer = new EffectComposer( this.renderer )
      this.renderPass = new RenderPass( this.scene, this.camera)
        // this.renderPass.clearColor = new THREE.Color(0,0,0);
        // this.renderPass.clearAlpha = 0;
      this.bloomPass = new UnrealBloomPass(new THREE.Vector2(this.width,this.height),1.4,0.1,0.1)
      // this.fxaaPass = new ShaderPass( FXAAShader );
      //   this.pixelRatio = this.render.getPixelRatio;
      //   this.fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( this.width * this.pixelRatio );
      //   this.fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( this.height * this.pixelRatio );
      // this.colorCorrectionPass = new ShaderPass( ColorCorrectionShader );

      this.primaryComposer.addPass( this.renderPass )
      this.primaryComposer.addPass( this.bloomPass )
      // this.primaryComposer.addPass( this.colorCorrectionPass )
      // this.primaryComposer.addPass( this.fxaaPass )
    
    this.secondaryComposer = new EffectComposer(this.renderer)
    this.secondaryComposer.addPass( new RenderPass( this.scene, this.camera))
    this.secondaryComposer.addPass( new UnrealBloomPass( 
      new THREE.Vector2(this.width,this.height),
      0.24,
      0,
      0
    ))


    this.clock = new THREE.Clock();
    if ( this.devControls === true ) this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    if ( this.devStats === true ) {this.stats = Stats(); document.body.appendChild(this.stats.dom);}

    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    // spot light which is illuminating the chart directly
    this.spotLight = new THREE.SpotLight(0xAEAEAE, 0.9);
    this.spotLight.castShadow = true;
    this.spotLight.position.set(0, 64, 36);
    this.scene.add(this.spotLight);

    // this.gridHelper = new THREE.GridHelper(250, 100);
    // this.scene.add(this.gridHelper);

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
      if (this.whichComposer === "primary"){ this.primaryComposer.render()}
      else if (this.whichComposer === "secondary") {this.secondaryComposer.render()};
      window.requestAnimationFrame(this.animate.bind(this));
  }

  toggleLights(){
    if (this.whichComposer === "primary"){
      this.whichComposer = "secondary"
    } else {
      this.whichComposer = "primary"
    }
  }

  turnOffLights() {
    this.whichComposer = "secondary"
  }

  turnOnLights() {
    this.whichComposer = "primary"
  }

  render() {
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.width = this.appContext.offsetWidth;
    this.height = this.appContext.offsetHeight;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width,this.height);
  }
}