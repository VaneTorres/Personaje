var camera, scene, renderer,axis;
var geometry, material, mesh;

function init() { 	
	createRenderer();				
	createCamara();
	createScene();
	heard();
	cube();
	eyeleft();
	eyeright();
	body();
	legleft();
	legrigh();
	armrigh();
	armleft();
	pantalla();
	signal();
	neck();
	puntaAntena();
	antena();
	//axis=new THREE.AxisHelper(5);
	//scene.add(axis);
}

function createRenderer(){
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );}

function createScene(){
	scene = new THREE.Scene();		
	scene.background = new THREE.Color( 0xFFFFFF );
}

function createCamara(){
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10 );
	camera.position.z = 4;
}

function puntaAntena(){
	var geometry= new THREE.SphereGeometry(0.06);
	var materia =new THREE.MeshBasicMaterial(  { color: 0xF07979  } );
	var mesh =new THREE.Mesh( geometry, materia);
	mesh.position.y=1.7;
	scene.add(mesh);
}

function antena() {
	var geometry= new THREE.CylinderGeometry(0,0.2,1.5);
	var materia =new THREE.MeshBasicMaterial(  { color: 0x5A5B59  } );
	var mesh =new THREE.Mesh( geometry, materia);
	mesh.position.y=1;
	scene.add(mesh);

}

function heard(){
	geometry= new THREE.CubeGeometry(0.7,0.5);
	materia =new THREE.MeshBasicMaterial(  { color: 0x5A5B59  } );
	mesh =new THREE.Mesh( geometry, materia);
	mesh.position.y=0.9;
	scene.add(mesh);
}

function cube(){
	geometry= new THREE.CubeGeometry(0.5,0.4,0.4);
	materia =new THREE.MeshBasicMaterial(  { color: 0x113B56 } );
	mesh =new THREE.Mesh( geometry, materia);
	mesh.position.set(0,0.9,0.3);
	scene.add(mesh);
}

function eyeleft(){
	geometry= new THREE.SphereGeometry(0.07);
	materia =new THREE.MeshBasicMaterial( { color: 0x79C5F5 } );
	mesh =new THREE.Mesh( geometry, materia);
	mesh.position.set(-0.1,0.9,0.7);
	scene.add(mesh);
}

function eyeright(){
	geometry= new THREE.SphereGeometry(0.07);
	materia =new THREE.MeshBasicMaterial(  { color: 0x79C5F5 } );
	mesh =new THREE.Mesh( geometry, materia);
	mesh.position.set(0.1,0.9,0.7);
	scene.add(mesh);
}

function neck(){
	geometry= new THREE.CubeGeometry(0.5,0.2);
	materia =new THREE.MeshBasicMaterial(  { color: 0x5A5B59  } );
	mesh =new THREE.Mesh( geometry, materia);
	mesh.position.y=0.7;
	scene.add(mesh);
}

function body(){
	geometry= new THREE.CubeGeometry(1);
	materia =new THREE.MeshBasicMaterial(  { color: 0x5A5B59 } );
	mesh =new THREE.Mesh( geometry, materia);
	scene.add(mesh);
}

function legleft() {
	var geometry= new THREE.CylinderGeometry(0.2,0.2,1);
	var materia =new THREE.MeshBasicMaterial(  { color: 0x5A5B59  } );
	var mesh =new THREE.Mesh( geometry, materia);
	mesh.position.set(-0.3,-0.8,0);
	scene.add(mesh);

}

function legrigh() {
	geometry= new THREE.CylinderGeometry(0.2,0.2,1);
	materia =new THREE.MeshBasicMaterial(  { color: 0x5A5B59  } );
	mesh =new THREE.Mesh( geometry, materia);
	mesh.position.set(0.3,-0.8,0);
	scene.add(mesh);

}

function armrigh() {
	var geometry= new THREE.CylinderGeometry(0.2,0.1,1);
	var materia =new THREE.MeshBasicMaterial(  { color: 0x5A5B59  } );
	var mesh =new THREE.Mesh( geometry, materia);
	mesh.rotation.z=-3;
	mesh.position.x=0.7;
	scene.add(mesh);
}

function armleft() {
	geometry= new THREE.CylinderGeometry(0.2,0.1,1);
	materia =new THREE.MeshBasicMaterial(  { color: 0x5A5B59  } );
	mesh =new THREE.Mesh( geometry, materia);
	mesh.rotation.z=3;
	mesh.position.x=-0.7;
	scene.add(mesh);
}

function pantalla(){
	geometry= new THREE.CubeGeometry(0.9,0.4);
	materia =new THREE.MeshBasicMaterial(  { color: 0xB4B7B2, wireframe: false } );
	mesh =new THREE.Mesh( geometry, materia);
	scene.add(mesh);
}

function signal(){
	geometry = new THREE.Geometry();
	var vertices;
	var senal;
	var vector;
	material;
	vertices = [
	[0.1,0.1,0,],
	[0.2,0.2,0,],
	[0.3,0,0,],
	[0.4,0.1,0,],
	[0.5,0,0,],
	[0.6,0.2,0,],
	[0.7,0,0,]
	];

	for (var i = 0; i < vertices.length; i++) {
	 	x = vertices[i][0];
	 	y = vertices[i][1];
	 	z = vertices[i][2];
	
	 	vector = new THREE.Vector3( x, y, z );
	 	geometry.vertices.push(vector);
	}
	
	material = new THREE.LineBasicMaterial({color : 0x3DB433});
	senal = new THREE.Line(geometry, material);
	senal.position.set(-0.4,-0.1,1.6);
		
	 scene.add(senal);
}
function animate( time ) {
	renderer.render( scene, camera );
	requestAnimationFrame( animate );
}

init();
requestAnimationFrame( animate );