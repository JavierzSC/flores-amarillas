import * as THREE from "three";

// Escena
const scene = new THREE.Scene();
scene.background = null;

// Cámara
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 3, 12);

// Renderizador
const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.getElementById("scene").appendChild(renderer.domElement);

// Luz de luna
const moonLight = new THREE.DirectionalLight(0xffffff, 2.2);
moonLight.position.set(5,10,8);
scene.add(moonLight);

// Luz ambiental
scene.add(new THREE.AmbientLight(0xffffff,1));

// Suelo
const ground = new THREE.Mesh(
    new THREE.CircleGeometry(8,64),
    new THREE.MeshPhongMaterial({
        color:0x111111
    })
);

ground.rotation.x = -Math.PI/2;
ground.position.y = -2.2;

scene.add(ground);

// Animación
function animate(){

    requestAnimationFrame(animate);

    renderer.render(scene,camera);

}

animate();

// Responsive

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});

// Crear estrellas

const stars=document.getElementById("stars");

for(let i=0;i<300;i++){

const s=document.createElement("div");

s.className="star";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDelay=Math.random()*3+"s";

stars.appendChild(s);

}

// Música

const audio=document.getElementById("audio");

document.getElementById("playMusic").onclick=()=>{

audio.play();

};

// Loader

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2500);