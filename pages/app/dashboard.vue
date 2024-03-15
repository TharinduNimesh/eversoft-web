<template>
  <div class="flex">
    <AppSideBar />
    <div class="flex-1 flex flex-col justify-between">
      <div class="w-full flex flex-col gap-5 py-5 pr-5">
        <!-- Header Start -->
        <div
          class="w-full flex flex-col bg-secondary-bkg rounded-xl shadow dark:shadow-black p-8"
        ></div>
        <!-- Header End -->

        <!-- Content Start -->
        <div
          class="w-full flex flex-col bg-secondary-bkg rounded-xl shadow dark:shadow-black p-8"
        ></div>
        <!-- Content End -->
      </div>

      <!-- Footer Start -->
      <footer class="w-full py-5 pr-5">
        <div
          class="flex flex-col bg-secondary-bkg rounded-xl shadow dark:shadow-black p-8"
        ></div>
      </footer>
      <!-- Footer End -->
    </div>
  </div>
</template>
