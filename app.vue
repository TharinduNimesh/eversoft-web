<script setup>
onBeforeMount(() => {
  setColorTheme();
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
