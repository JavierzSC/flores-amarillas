import * as THREE from './libs/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


const geometry = new THREE.SphereGeometry(1, 32, 32);

const material = new THREE.MeshBasicMaterial({
    color: 0xffff00
});

const esfera = new THREE.Mesh(geometry, material);

scene.add(esfera);


camera.position.z = 3;


function animate(){
    requestAnimationFrame(animate);

    esfera.rotation.y += 0.01;

    renderer.render(scene,camera);
}

animate();