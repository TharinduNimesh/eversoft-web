<script setup>
const config = useAppConfig();

onBeforeMount(() => {
  setColorTheme();
});

// set user prefer color theme, or default blue
function setColorTheme() {
  const colorTheme = localStorage.getItem("color-theme");
  config.ui.primary = colorTheme || "blue";
}
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
