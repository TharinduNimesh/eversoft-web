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
  <div class="w-full h-screen flex flex-col">
    <!-- Header start -->
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
    <div class="flex-1 flex flex-col justify-center items-center gap-5">
      <div class="w-full md:w-2/3 flex flex-col items-center text-center gap-3">
        <h1 class="text-6xl font-extrabold">
          Powerful Digital Solutions With EVERSOFT
          <span class="text-primary">.</span>
        </h1>
        <span class="text-2xl">We are team of talented Software Developers</span>
      </div>
      <UButton label="Get Started" />
    </div>
    <!-- Header end -->
  </div>
</template>
