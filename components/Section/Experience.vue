<script setup lang="ts">
import * as THREE from "three";

const threeGlobeCanvas = ref<HTMLCanvasElement | null>(null);
const renderer = ref();
const sizes = ref({
  width: 0,
  height: 0,
});

const scene = new THREE.Scene();
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);
camera.position.set(0, 10, 40);

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

  //   update camera aspect ratio
  camera.aspect = sizes.value.width / sizes.value.height;

  renderer.value.render(scene, camera);
});
</script>

<template>
  <section class="flex justify-center">
    <div class="container grid grid-cols-2 gap-6 px-4 py-16 lg:px-8">
      <div class="col-span-full lg:col-span-1">
        <canvas ref="threeGlobeCanvas" class="w-full"></canvas>
      </div>
      <div class="col-span-full lg:col-span-1">
        <h2 class="text-3xl font-bold text-center lg:text-left">Experience</h2>
        <p class="text-center lg:text-left mt-4">
          We have been working with various technologies and tools to provide
          the best solutions to our clients.
        </p>
      </div>
    </div>
  </section>
</template>
