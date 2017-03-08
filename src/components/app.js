import * as THREE from 'three'
/*App manager*/

/*Dans une class, il y a propriété et méthode*/
class App {
	constructor(name){

		//je sauvegarde 'name' au sein de mon objet
		this._name = name


		//Init Scène
		//créer une scène
		this.initScene()

		//Exemple
		console.info("App:constructor 👹", name)
		this.displayName()
	}
	/**
	*Scene init
	*
	*@returns {undefined}
	*
	*@memberOf App
	*/
	initScene(){
		//Je crée la scène
		console.info('Init Scène 🤕');
		//Create Scene
		this._width = window.innerWidth;
		this._height = window.innerHeight;
		this._scene = new THREE.Scene();
		//Init camera
		this.initCamera();
		//Init Renderer
		this.initRenderer();
		//Render !! (faire le rendu)
	}

	initCamera(){
		const fieldOfView = 60;
		const aspectRatio = this._width/this._height;
		const nearPlane = 1;
		const farPlane = 2000;

		this._camera = new THREE.PerspectiveCamera( 
			fieldOfView, 
			aspectRatio, 
			nearPlane, 
			farPlane 
			)
	}
	initRenderer(){
		this._renderer = new THREE.WebGLRenderer();
		this._renderer.setSize(this._width, this._height);
		console.info(this._renderer);
		document.body.appendChild(this._renderer.domElement);

	}
	render(){
		this._renderer.render(this._scene, this._camera);
	}

	displayName(){
		console.info('name :', this._name);
	}
}

export default App