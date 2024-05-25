<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const threeGlobeCanvas = ref<HTMLCanvasElement | null>(null);
const renderer = ref();
const controls = ref<OrbitControls | null>(null);
const sizes = ref({
  width: 0,
  height: 0,
});

const scene = new THREE.Scene();
const globe = new THREE.SphereGeometry(13, 256, 128);

const earthTexture = new THREE.TextureLoader().load("/textures/earth_daymap.jpg");
const globeMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  flatShading: true,
  roughness: 0.5,
  map: earthTexture,
});

const globeMesh = new THREE.Mesh(globe, globeMaterial);
globeMesh.castShadow = true;
globeMesh.receiveShadow = true;
scene.add(globeMesh);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(10, 15, 10);
directionalLight.castShadow = true;
scene.add(directionalLight);

const spotLight = new THREE.SpotLight(0xffffff, 0.5);
spotLight.position.set(0, 10, 0);
spotLight.castShadow = true;
scene.add(spotLight);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);
camera.position.set(0, 0, 40);

onMounted(() => {
  // set canvas size
  sizes.value.width = threeGlobeCanvas.value?.clientWidth || 0;
  sizes.value.height = threeGlobeCanvas.value?.clientHeight || 0;

  renderer.value = new THREE.WebGLRenderer({
    canvas: threeGlobeCanvas.value as HTMLCanvasElement,
    alpha: true,
  });
  renderer.value.setPixelRatio(window.devicePixelRatio);
  //   renderer.value.setClearColor(0x000000, 0); // the default
  renderer.value.setSize(sizes.value.width, sizes.value.height);
  renderer.value.shadowMap.enabled = true;
  renderer.value.setPixelRatio(2);

  controls.value = new OrbitControls(camera, renderer.value.domElement);
  controls.value.enableDamping = true;
  controls.value.enablePan = false;
  controls.value.enableZoom = false;
  controls.value.autoRotate = true;
  controls.value.autoRotateSpeed = 5;

  //   update camera aspect ratio
  camera.aspect = sizes.value.width / sizes.value.height;
  camera.updateProjectionMatrix();
  controls.value.update();

  window.addEventListener("resize", () => {
    // update sizes
    sizes.value.width = threeGlobeCanvas.value?.clientWidth || 0;
    sizes.value.height = threeGlobeCanvas.value?.clientHeight || 0;

    // update camera
    camera.aspect = sizes.value.width / sizes.value.height;
    controls.value?.update();
    camera.updateProjectionMatrix();

    // update renderer
    renderer.value.setSize(sizes.value.width, sizes.value.height);
    renderer.value.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  loop();
});

const loop = () => {
  renderer.value.render(scene, camera);
  window.requestAnimationFrame(loop);
};
</script>

<template>
  <section class="flex justify-center">
    <div class="container grid grid-cols-2 gap-6 px-4 py-16 lg:px-8">
      <div class="col-span-full lg:col-span-1 min-h-[400px]">
        <canvas ref="threeGlobeCanvas" class="w-full h-full"></canvas>
      </div>
      <div class="col-span-full lg:col-span-1 flex flex-col gap-3">
        <span class="text-xl uppercase text-gray-400 dark:text-gray-500"
          >Expertise You Can Trust</span
        >
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-recoleta">
          Decades of Excellence in Software Solutions
        </h2>
        <p class="text-xl font-roboto text-gray-600 dark:text-slate-400">
          Benefit from our wealth of experience in crafting tailored software
          solutions for diverse industries. Trust us to elevate your digital
          presence.
        </p>
        <div class="grid grid-cols-2 gap-5">
          <div class="col-span-full md:col-span-1 flex gap-3">
            <lord-icon
              trigger="loop"
              class="w-20"
              :colors="`primary:${
                $colorMode.value == 'light' ? '#000000' : '#ffffff'
              }`"
              src="/animations/client.json"
            />
            <div class="flex flex-col">
              <h3 class="text-3xl font-bold text-gray-700 dark:text-slate-300">
                65 +
              </h3>
              <p class="text-sm font-roboto text-gray-600 dark:text-slate-400">
                <strong>Happy Clients</strong> - Experiencing the Joy of Our
                Expertly Crafted Delights.
              </p>
            </div>
          </div>

          <div class="col-span-full md:col-span-1 flex gap-3">
            <lord-icon
              trigger="loop"
              class="w-20"
              :colors="`primary:${
                $colorMode.value == 'light' ? '#000000' : '#ffffff'
              }`"
              src="/animations/application.json"
            />
            <div class="flex flex-col">
              <h3 class="text-3xl font-bold text-gray-700 dark:text-slate-300">
                70 +
              </h3>
              <p class="text-sm font-roboto text-gray-600 dark:text-slate-400">
                <strong>Elevating Visions</strong> - Exceptional Projects Fueled
                by Passion and Precision.
              </p>
            </div>
          </div>

          <div class="col-span-full md:col-span-1 flex gap-3">
            <lord-icon
              trigger="loop"
              class="w-20"
              :colors="`primary:${
                $colorMode.value == 'light' ? '#000000' : '#ffffff'
              }`"
              src="/animations/clock.json"
            />
            <div class="flex flex-col">
              <h3 class="text-3xl font-bold text-gray-700 dark:text-slate-300">
                {{ new Date().getFullYear() - 2021 }} +
              </h3>
              <p class="text-sm font-roboto text-gray-600 dark:text-slate-400">
                <strong>Years of expertise,</strong> ensuring exceptional
                service tailored to your needs.
              </p>
            </div>
          </div>

          <div class="col-span-full md:col-span-1 flex gap-3">
            <lord-icon
              trigger="loop"
              class="w-20"
              :colors="`primary:${
                $colorMode.value == 'light' ? '#000000' : '#ffffff'
              }`"
              src="/animations/awards.json"
            />
            <div class="flex flex-col">
              <h3 class="text-3xl font-bold text-gray-700 dark:text-slate-300">
                5 +
              </h3>
              <p class="text-sm font-roboto text-gray-600 dark:text-slate-400">
                <strong>Recognized Excellence</strong> - Awards for Unparalleled
                Dedication and Innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
