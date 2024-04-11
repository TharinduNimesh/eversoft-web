<script setup>
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

onBeforeMount(() => {
  setColorTheme();
  defineElement(lottie.loadAnimation);
});

// set user prefer color theme, or default blue
function setColorTheme() {
  const colorTheme = localStorage.getItem("color-theme");
  useUIStore().setColor(colorTheme || "blue");
}
</script>

<template>
  <div class="bg-primary-bkg text-gray-700 dark:text-slate-200">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Hide scrollbar for webkit browsers */
/* This will hide the scrollbar when not interacting with it */
::-webkit-scrollbar {
  width: 3px;
  /* Set the width of the scrollbar */
}

/* Track for webkit browsers */
::-webkit-scrollbar-track {
  background: transparent;
  /* Set the background color of the track */
}

/* Handle for webkit browsers */
::-webkit-scrollbar-thumb {
  background: #888;
  /* Set the background color of the thumb */
  border-radius: 4px;
  /* Round the corners of the thumb */
}

/* When hovering over the scrollbar */
::-webkit-scrollbar-thumb:hover {
  background: #555;
  /* Change the thumb color on hover */
}

/* Scrollbar corner (between vertical and horizontal scrollbar) */
::-webkit-scrollbar-corner {
  background: #f1f1f1;
  /* Set the background color of the corner */
}

.active {
  color: peru;
}
</style>