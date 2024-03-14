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
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
