import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import GUI from 'lil-gui';
import gsap from "gsap";
import modelUrl from '../assets/house.glb';
// import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

// import vertex from "./shader/vertex.glsl";
// import fragment from "./shader/fragment.glsl";


export default class Sketch{
    constructor(option){
        this.scene = new THREE.Scene();

        this.container = option.dom;
        this.width =  this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor('black', 1);
        this.renderer.physicalCorrectLights = true;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;

        this.container.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight,0.001,1000);
        this.camera.position.set(20,10,-3);
        this.controls = new OrbitControls(this.camera,this.renderer.domElement);

        this.time = 0;

        this.isPlaying = true;

        this.addObjects();
        this.addLights();
        this.resize();
        this.render();
        this.setupResize();

    }

    setUpSettings(){
        this.settings = { progress:0,};
        this.gui = new GUI();
        this.gui.add(this.settings, 'progress', 0, 1, 0.01).onChange((val)=>{});
    }
    setupResize(){
        window.addEventListener("resize",this.resize.bind(this));
    }
    resize(){
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width,this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }
    addLights(){
        //add ambient light
        const ambient = new THREE.AmbientLight(0xffffff, 1);
        this.scene.add(ambient);
       
    }
    addObjects() {
        this.loader = new GLTFLoader();

        this.loader.load(modelUrl, (gltf) => {
            // gltf.scene.scale.set(5, 5, 5);
            gltf.scene.rotateY(Math.PI / 2);

            
            const box = new THREE.Box3().setFromObject(gltf.scene);
            const center = box.getCenter(new THREE.Vector3());

            gltf.scene.position.x += (gltf.scene.position.x - center.x);
            gltf.scene.position.y += (gltf.scene.position.y - center.y);
            gltf.scene.position.z += (gltf.scene.position.z - center.z);

            this.scene.add(gltf.scene);

        }, 
        function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	    },
        function (error) {
            console.error(error);
        });
    }
    stop(){
        this.isPlaying = false;
    }
    play(){
        if(!this.isPlaying){
            this.isPlaying = true;
            this.render();
        }
    }
    render(){
        if(!this.isPlaying) return;
        this.time += 0.05;
        // this.material.uniforms.time.value = this.time;
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
}

new Sketch({
    dom: document.getElementById("container")
});


