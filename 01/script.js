//! First thing to do is create 3 fundamental elements, the Scene, the Camera and the Renderer

//& New Empty scene
var scene = new THREE.Scene();

//& New Camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

//& New Renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("white");
document.body.appendChild(renderer.domElement);

//! After creating the Scene, Camera and Renderer (the important elements dyal threejs). Now we need to create our objects bhal a cube, table or something we create.

//& Cube Mesh with basic material
//^ Cube or any elemnts is created with 2 things, a geometry and a material, using THREE.Mesh, we can merge the two for our final result
//^ Geometry, it's the matematical stuff, the shape of the object we want
//^ Material, it's the color, lightSource, properties ... of the object we want
//^ Mesh, it's the final object we want to render
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: "blue" });
var cube = new THREE.Mesh(geometry, material);

//& After making our element, we need to add it to the scene
scene.add(cube);

//& Animation of the scene: Render Loop
var render = function () {
  requestAnimationFrame(render); //* function that runs at 60 frames per second

  //& Animation code (rotation, position, scale of x y z )
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  //* Render the scene
  renderer.render(scene, camera);
};

render();
