import * as THREE from './libs/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Cámara
camera.position.z = 5;


// Luz amarilla
const luz = new THREE.PointLight(0xffdd00, 3, 20);
luz.position.set(0, 2, 3);
scene.add(luz);


// Crear pétalos
function crearFlor(x, y, z) {

    const grupo = new THREE.Group();

    const centro = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshStandardMaterial({
            color: 0x5a3200
        })
    );

    grupo.add(centro);


    for(let i = 0; i < 12; i++){

        const petalo = new THREE.Mesh(
            new THREE.SphereGeometry(0.15,16,16),
            new THREE.MeshStandardMaterial({
                color: 0xffff00
            })
        );

        const angulo = (i / 12) * Math.PI * 2;

        petalo.position.x = Math.cos(angulo)*0.35;
        petalo.position.y = Math.sin(angulo)*0.35;

        grupo.add(petalo);
    }


    grupo.position.set(x,y,z);

    scene.add(grupo);

}


// Girasol inicial
crearFlor(0,0,0);


// Animación
function animar(){

    requestAnimationFrame(animar);

    renderer.render(scene,camera);
}

animar();