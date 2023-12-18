import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import gsap from "gsap";

import vertex from "./shader/vertex.glsl";
import fragment from "./shader/fragment.glsl";
import simVertex from "./shader/simVertex.glsl";
import simFragment from "./shader/simFragment.glsl";


export default class Sketch{
    constructor(option){
        this.scene = new THREE.Scene();

        this.container = option.dom;
        this.width =  this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(Math.sin(window.devicePixelRatio,2));
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor('black',1);

        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        this.renderer.physicalCorrectLights = true;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;

        this.container.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight,0.001,1000);
        this.camera.position.set(0,0,10);
        this.camera.lookAt(0,0,0);
        this.controls = new OrbitControls(this.camera,this.renderer.domElement);

        this.time = 0;

        this.isPlaying = true;
        document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this));


        this.setupEvents();
        this.setupFBO();
        this.addObjects();
        this.resize();
        this.render();
        this.setupResize();

    }
    setupEvents(){
        this.dummy = new THREE.Mesh(
            new THREE.PlaneGeometry(100,100),
            new THREE.MeshBasicMaterial()
        );

        document.addEventListener('pointermove',(e) => {
            this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

            this.raycaster.setFromCamera(this.pointer, this.camera);
            let intersects = this.raycaster.intersectObject(this.dummy);
            if(intersects.length > 0){
                let point = intersects[0].point;
                this.fbomaterial.uniforms.uMouse.value = point;
            }    
        });
    }

    getRenderTarget(){
        const renderTarget = new THREE.WebGLRenderTarget(this.width, this.height,{
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
        });
        return renderTarget;
    }
    
    setupFBO(){
        this.size = 100;
        this.fbo = this.getRenderTarget();
        this.fb1 = this.getRenderTarget();
    
        this.fboScene = new THREE.Scene();
        this.fboCamera = new THREE.OrthographicCamera(-1,1,1,-1,-1,1);
        this.fboCamera.position.set(0,0,0.5);
        // this.fboCamera.lookAt(0,0,0);
    
        let geometry = new THREE.PlaneGeometry(2,2);

        this.data = new Float32Array(this.size*this.size*4);

        let innerRadius = 0.1; // inner radius of the donut
        let outerRadius = 5.0; // outer radius of the donut

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                let theta = 2 * Math.PI * Math.random(); // angle
                let r = Math.random() * (outerRadius - innerRadius) + innerRadius; // distance from the center
                let x = r * Math.cos(theta); // x position
                let y = r * Math.sin(theta); // y position

                this.data.set([x, y,Math.random()*4+1,0 ], 4 * (this.size * i + j));
            }
        }

        this.fbotexture = new THREE.DataTexture(
            this.data, 
            this.size,
            this.size,
            THREE.RGBAFormat,
            THREE.FloatType
        );

        this.fbotexture.magFilter = THREE.NearestFilter;
        this.fbotexture.minFilter = THREE.NearestFilter;
        this.fbotexture.needsUpdate = true;

        this.fbomaterial = new THREE.ShaderMaterial({
            uniforms:{
                uPositions:{value: this.fbotexture},
                uMouse:{value: new THREE.Vector2(0,0)},
                time : {value:0},
            },
            vertexShader : simVertex,
            fragmentShader : simFragment,
        })
            
        this.fboMesh = new THREE.Mesh(geometry, this.fbomaterial);
        this.fboScene.add(this.fboMesh);

        this.renderer.setRenderTarget(this.fbo);
        this.renderer.render(this.fboScene,this.fboCamera);
        this.renderer.setRenderTarget(this.fb1);
        this.renderer.render(this.fboScene,this.fboCamera);

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
    addObjects(){
        this.material = new THREE.ShaderMaterial({
            extensions:{
                derivatives:"#extension GL_OES_standard_derivatives : enable"
            },
            side: THREE.DoubleSide,
            uniforms:{
                time:{ value: 0 },
                uPositions:{ value: null },
                resolution: { value: new THREE.Vector4() },
            },
            // wireframe: true,
            transparent: true,
            vertexShader: vertex,
            fragmentShader: fragment,
            depthWrite: false,
            depthTest: false,
        });

        this.number = this.size**2;

        let geometry = new THREE.BufferGeometry();
        let position = new Float32Array(this.number*3)
        let uv = new Float32Array(this.number*2);

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                let index = (i+j*this.size);
                uv[index*2 + 0 ] = i/(this.size-1);
                uv[index*2 + 1 ] = j/(this.size-1);   
            }
        }

        geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));
        geometry.setAttribute('position',new THREE.BufferAttribute(position,3));
        
        for (let i = 0; i < this.number; i++) {
            position.set([0,0,0],i*3);
        }

        this.material.uniforms.uPositions.value = this.fbotexture;
        this.points = new THREE.Points(geometry,this.material);
        this.scene.add(this.points);
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
    handleVisibilityChange() {
        if (document.hidden) {
            // Pause rendering when the page is not visible
            this.stop();
        } else {
            // Resume rendering when the page becomes visible
            this.play();
        }
    }
    render(){
        if(!this.isPlaying) return;
        this.time += 0.01;
        this.material.uniforms.time.value = this.time;
        this.fbomaterial.uniforms.time.value = this.time;
        requestAnimationFrame(this.render.bind(this));
        
        this.fbomaterial.uniforms.uPositions.value = this.fb1.texture;;
        this.material.uniforms.uPositions.value = this.fbo.texture;

        this.renderer.setRenderTarget(this.fbo);
        this.renderer.render(this.fboScene,this.fboCamera);
        this.renderer.setRenderTarget(null);
        this.renderer.render(this.scene, this.camera);
    
        //swap render targets
        let temp = this.fbo;
        this.fbo = this.fb1;
        this.fb1 = temp;
    }
}

new Sketch({
    dom: document.getElementById("container")
});


