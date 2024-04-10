<template>
  <div class="min-h-screen flex flex-col justify-center items-center gap-5">
    <div
      class="relative w-full md:w-2/3 flex flex-col items-center text-center gap-3"
    >
      <!-- Floating Images Start -->
      <img
        :src="`/img/elements/shape_26-${$colorMode.value}.svg`"
        class="absolute animate-float w-[80px] top-0 left-5 md:w-[100px] md:-top-[60px] md:-left-[60px] lg:w-[120px] lg:-top-[80px] lg:-left-[120px] xl:w-[140px] xl:-top-[100px] xl:-left-[130px]"
      />
      <img
        :src="`/img/elements/shape_27-${$colorMode.value}.svg`"
        class="absolute animate-float w-[80px] bottom-0 right-5 md:w-[100px] md:-bottom-[60px] md:-right-[60px] lg:w-[120px] lg:-bottom-[80px] lg:-right-[120px] xl:w-[140px] xl:-bottom-[100px] xl:-right-[130px]"
      />
      <!-- Floating Images End -->

      <!-- Slogan Start -->
      <h1
        class="text-4xl lg:text-5xl xl:text-6xl font-recoleta"
        :style="`--underline-img: url('/img/elements/underline-${$colorMode.value}.svg');`"
      >
        <span class="custom-underline">Transform</span> Ideas into
        <span class="text-bkg">Seamless</span> Solutions with Eversoft
        <span class="text-primary">!</span>
      </h1>
      <!-- Slogan End -->

      <span
        class="text-2xl font-roboto font-[400] text-gray-500 dark:text-gray-400"
      >
        We are team of talented Software Engineers
      </span>
    </div>

    <!-- Quick Action Buttons Start -->
    <div
      class="flex flex-col sm:flex-row justify-center items-center gap-5 mt-5"
    >
      <UButton
        size="xl"
        label="Contact Us"
        icon="solar:phone-rounded-bold"
        class="rounded-full px-8 py-4"
      />
      <div class="flex items-center gap-3 cursor-pointer learn-more">
        <UButton
          size="xl"
          icon="solar:alt-arrow-down-bold"
          variant="outline"
          class="rounded-full px-4 py-4 btn-learn-more"
        />
        <div class="flex justify-center flex-col">
          <span class="text-primary font-bold">Scroll</span>
          <span class="text-sm font-semibold">Learn more</span>
        </div>
      </div>
    </div>
    <!-- Quick Action Buttons End -->
  </div>
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
  @apply bg-primary text-white dark:text-black;
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
