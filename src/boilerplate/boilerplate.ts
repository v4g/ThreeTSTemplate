import { WebGLRenderer, Scene, PerspectiveCamera, Raycaster, Color, Vector3, Plane, Object3D } from "three";

export class Boilerplate {

    renderer: WebGLRenderer;
    scene: Scene;
    camera: PerspectiveCamera;
    raycaster: Raycaster;
    mouse = { x: 0, y: 0 };
    pointSelected !: Object3D | null;
    t: number;
    constructor() {

        var container = document.createElement('div');
        this.raycaster = new Raycaster();
        document.body.appendChild(container);

        this.renderer = new WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(this.renderer.domElement);

        this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
        this.camera.position.set(0, 0, 100);
        this.camera.lookAt(0, 0, 0);

        this.scene = new Scene();
        this.scene.background = new Color('#000000');
        
        window.addEventListener('resize', this.onWindowResize.bind(this), false);

        this.postInitHook();

    }

    // Post creation hook 
    postInitHook() {
    }

    onWindowResize() {

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);

    }

    //

    animate() {
        this.animateHook();
        requestAnimationFrame(this.animate.bind(this));
        this.render();

    }

    // Use this function to place all animation code
    animateHook() {
    }

    render() {

        this.renderer.render(this.scene, this.camera);
    }

    
}
