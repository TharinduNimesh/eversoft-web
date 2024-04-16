<script setup>
const mouseOnLearnMore = ref(false);
const color = useColorMode();

function changeColor() {
  if (mouseOnLearnMore.value) {
    return;
  }
  mouseOnLearnMore.value = true;
}

const btnColor = computed(() => {
  if (color.value == "light") {
    return mouseOnLearnMore.value ? "#ffffff" : "#000000";
  }
  return mouseOnLearnMore.value ? "#000000" : "#ffffff";
});
</script>

<template>
  <section
    class="relative min-h-screen flex flex-col justify-center items-center gap-5"
    >
    <div class="absolute w-full h-full z-[9]"></div>
    <div
      class="relative w-full md:w-2/3 flex flex-col items-center text-center gap-3"
    >
      <!-- Floating Images Start -->
      <img
        :src="`/img/elements/shape_26-${$colorMode.value}.svg`"
        class="absolute animate-float delay-300 w-[80px] top-0 left-5 md:w-[100px] md:-top-[60px] md:-left-[60px] lg:w-[120px] lg:-top-[80px] lg:-left-[120px] xl:w-[140px] xl:-top-[100px] xl:-left-[130px]"
      />
      <img
        :src="`/img/elements/shape_27-${$colorMode.value}.svg`"
        class="absolute animate-float w-[80px] bottom-0 right-5 md:w-[100px] md:-bottom-[60px] md:-right-[60px] lg:w-[120px] lg:-bottom-[80px] lg:-right-[120px] xl:w-[140px] xl:-bottom-[100px] xl:-right-[130px]"
      />
      <!-- Floating Images End -->

      <!-- Slogan Start -->
      <h1
        class="text-4xl lg:text-5xl xl:text-6xl font-recoleta z-10"
        :style="`--underline-img: url('/img/elements/underline-${$colorMode.value}.svg');`"
      >
        <span class="custom-underline">Transform</span> Ideas into
        <span class="text-bkg">Seamless</span> Solutions with Eversoft
        <span class="text-primary">!</span>
      </h1>
      <!-- Slogan End -->

      <span
        class="text-2xl font-roboto font-[400] text-gray-500 dark:text-gray-400 z-10"
      >
        We are team of talented Software Engineers
      </span>
    </div>

    <!-- Quick Action Buttons Start -->
    <div
      class="flex flex-col sm:flex-row justify-center items-center gap-5 mt-5 z-10"
    >
      <UButton size="xl" class="rounded-full px-8 py-4" id="btn-contact">
        <lord-icon
          :colors="`primary:${
            $colorMode.value == 'dark' ? '#000000' : '#ffffff'
          }`"
          src="/animations/call-phone.json"
          trigger="hover"
          target="#btn-contact"
        />
        Contact Us
      </UButton>

      <!-- Learn More Button Start -->
      <div
        class="flex items-center gap-3 cursor-pointer learn-more"
        @mouseover="changeColor"
        @mouseleave="mouseOnLearnMore = false"
      >
        <button
          class="btn-learn-more w-[60px] h-[60px] rounded-full flex justify-center items-center border border-black dark:border-white"
        >
          <lord-icon
            src="/animations/trending-flat.json"
            :colors="`primary:${btnColor}`"
            trigger="hover"
            target=".learn-more"
            class="rotate-90"
          />
        </button>
        <div class="flex justify-center flex-col">
          <span class="text-primary font-bold">Scroll</span>
          <span class="text-sm font-semibold">Learn more</span>
        </div>
      </div>
      <!-- Learn More Button End -->
    </div>
    <!-- Quick Action Buttons End -->
  </section>
</template>

<style scoped>
.text-bkg {
  @apply relative z-10;
}

.text-bkg::before {
  content: "";
  position: absolute;
  width: 80%;
  height: 80%;
  top: 10%;
  right: -10px;
  animation: gradient 10s linear infinite;
  @apply bg-primary/20 -z-10;
}

.custom-underline {
  @apply relative z-10;
}

.learn-more:hover .btn-learn-more {
  @apply bg-black dark:bg-white;
}

@media (min-width: 768px) {
  .custom-underline::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    bottom: -8px;
    left: 0;
    background-image: var(--underline-img);
  }
}
</style>
