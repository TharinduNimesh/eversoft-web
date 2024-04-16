<script setup>
const color = useColorMode();
const isDark = ref(false);

// set toggle icon based on color theme
onMounted(() => {
  isDark.value = color.value === "dark";
});

function toggleTheme() {
  color.preference = color.preference === "light" ? "dark" : "light";
  isDark.value = !isDark.value;
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full px-5 py-3 z-[999]"
  >
    <div
      class="bg-secondary-bkg/50 w-full flex items-center justify-between px-5 py-3 shadow dark:shadow-black rounded-lg backdrop-blur-md"
    >
      <div class="flex items-center gap-3">
        <img
          src="/img/logo.png"
          alt="Eversoft Logo"
          class="w-[40px]"
        />
        <h1 class="text-2xl font-bold p-0 m-0 uppercase">
          Eversoft <span class="text-primary">.</span>
        </h1>
      </div>
      <div class="flex gap-4 items-center">
        <!-- <ColorTheme /> -->
        <div @click="toggleTheme">
          <UButton
            v-show="isDark"
            icon="ic:round-dark-mode"
            class="rounded-full hover:rotate-[360deg] transition-transform duration-300"
            variant="ghost"
            color="gray"
          />
          <UButton
            v-show="!isDark"
            icon="ic:round-light-mode"
            class="rounded-full hover:rotate-[360deg] transition-transform duration-300"
            variant="ghost"
            color="gray"
          />
        </div>
        <UButton color="gray" label="Sign Up" to="/signup" />
        <UButton label="Sign In" to="/signin" />
      </div>
    </div>
  </header>
</template>
