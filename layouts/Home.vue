<script setup>
const config = useAppConfig();
onMounted(() => {
  config.ui.primary = "blue";
});
</script>

<template>
  <div class="w-full flex flex-col">
    <!-- Intro Start -->
    <Intro />
    <!-- Intro End -->

    <!-- Header start -->
    <Header />
    <!-- Header end -->

    <!-- Main Start -->
    <main class="relative flex flex-col">
      <slot />
      <Feedback />
    </main>
    <!-- Main End -->

    <Footer />
  </div>
</template>
