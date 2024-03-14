<script setup>
const color = useColorMode();
const isDark = ref(false);

// set toggle icon based on color theme
onMounted(() => {
  isDark.value = color.preference === "dark";
});
watch(isDark, (value) => {
  color.preference = value ? "dark" : "light";
});
</script>

<template>
  <header
    class="w-full flex items-center justify-between px-5 py-3 shadow dark:shadow-black"
  >
    <div>
      <h1 class="text-xl font-bold">
        Eversoft <span class="text-primary text-2xl">.</span>
      </h1>
    </div>
    <div class="flex gap-4 items-center">
      <ColorTheme />
      <UToggle
        color="gray"
        v-model="isDark"
        on-icon="solar:moon-bold"
        off-icon="solar:sun-2-bold"
      />
      <UButton color="gray" label="Sign Up" to="/signup" />
      <UButton label="Sign In" to="/signin" />
    </div>
  </header>
</template>
