<script setup lang="ts">
import { gsap } from "gsap";
onMounted(() => {
  animate();
});

let glitchAudio = new Audio("/audio/glitch.mp3");
const logoBox = ref<HTMLElement | null>(null);
const tl = gsap.timeline({ defaults: { duration: 1 } });

function animate() {
  tl.from("#logo", {
    x: -100,
    opacity: 0,
  })
    .from("#name-main", {
      y: 20,
      opacity: 0,
    })
    .from("#name-secondary", {
      y: 20,
      opacity: 0,
    })
    .from(
      "#present",
      {
        y: 20,
        opacity: 0,
      },
      "<.5"
    )
    .to("#logo-box", {
      delay: 0.5,
      opacity: 0,
      y: -100,
      onComplete: () => {
        console.log(toRaw(logoBox.value));
        logoBox.value?.classList.add("hidden");
      },
    })
    .from(".slogan", {
      y: 20,
      opacity: 0,
      stagger: 0.2,
    })
    .from(".glitch", {
      scale: 0.5,
      opacity: 0,
      onComplete: () => {
        // wait for 1s and then glitch the text
        setTimeout(() => {
          glitchAudio.play();
          toggleGlitchText();
          setTimeout(() => {
            toggleGlitchText();
          }, 1000);
        }, 1000);
      },
    })
    .to("#intro", {
      delay: 2.5,
      y: "-100%",
      opacity: 0,
      onComplete: () => {
        document.getElementById("intro")?.remove();
      },
    });
}

function toggleGlitchText() {
  const glitchText = document.querySelector(".glitch");
  glitchText?.classList.toggle("animate-glitch");
}
</script>

<template>
  <div
    class="absolute w-full h-screen flex flex-col justify-center items-center bg-primary-bkg bg-cover bg-no-repeat bg-left-top z-[9000]"
    id="intro"
  >
    <!-- Logo Start -->
    <div
      class="flex flex-col justify-center items-center gap-3"
      id="logo-box"
      ref="logoBox"
    >
      <div class="flex items-center gap-3">
        <img
          src="/public/img/logo.png"
          class="w-[60px] lg:w-[75px] dark:grayscale"
          id="logo"
        />
        <div class="flex flex-col">
          <h1 class="text-3xl lg:text-4xl font-extrabold" id="name-main">
            Eversoft
          </h1>
          <h1
            class="text-md text-lg font-semibold text-gray-500 dark:text-gray-400"
            id="name-secondary"
          >
            IT Solutions
          </h1>
        </div>
      </div>
      <div id="present" class="flex justify-center">
        <p class="text-gray-500 dark:text-gray-400 uppercase font-semibold">
          Present
        </p>
      </div>
    </div>
    <!-- Logo End -->

    <!-- Slogan Start -->
    <div class="flex flex-wrap gap-3 text-2xl md:text-4xl uppercase font-bold">
      <span class="slogan">Unlocking</span>
      <span class="slogan">the</span>
      <span class="slogan">Future</span>
      <span class="slogan">of</span>
      <span class="slogan">Software</span>
      <span class="slogan">Solutions</span>
    </div>
    <!-- Slogan End -->

    <!-- Welcome Start -->
    <div class="text-2xl md:text-4xl lg:text-6xl font-bold uppercase glitch">
      <span>Welcome To Eversoft</span>
      Welcome To Eversoft
      <span>Welcome To Eversoft</span>
    </div>
    <!-- Welcome End -->
  </div>
</template>

<style scoped>
.animate-glitch {
  animation: glitch 500ms infinite;
}

.glitch {
  position: relative;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 20% 100%);
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.animate-glitch span:first-child {
  animation: glitch 650ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.025em, -0.0125em);
  /* color: green; */
  opacity: 0.8;
}

.animate-glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
  transform: translate(0.0125em, 0.025em);
  /* color: red; */
  opacity: 0.8;
}
@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
}
</style>
