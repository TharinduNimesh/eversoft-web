<template>
  <div class="w-full flex flex-col bg-secondary-bkg">
    <!-- Header start -->
    <Header />
    <!-- Header end -->

    <!-- Main Start -->
    <main class="flex flex-col pt-10">
      <slot />
    </main>
    <!-- Main End -->
  </div>
</template>
