<script setup>
const sidebarStore = useSidebarStore();
</script>

<template>
  <div class="flex">
    <AppSideBar
      :is-open="sidebarStore.isOpen"
      @toggle-sidebar="sidebarStore.toggle"
    />
    <div class="flex-1 flex h-screen flex-col justify-between p-5 overflow-hidden overflow-y-scroll">
      <div class="w-full flex flex-col gap-5">
        <!-- Header Start -->
        <AppHeader @toggle-sidebar="sidebarStore.toggle" />
        <!-- Header End -->

        <!-- Content Start -->
        <slot />
        <!-- Content End -->
      </div>

      <!-- Footer Start -->
      <footer class="w-full pt-5">
        <div
          class="flex flex-col justify-between items-center text-center md:flex-row md:text-left bg-secondary-bkg rounded-xl shadow dark:shadow-black p-6"
        >
          <p class="text-sm text-gray-500">
            © 2022 <strong>Eversoft</strong>. All Rights Reserved.
          </p>
          <p class="text-sm text-gray-500">
            Powered by
            <ULink
              to="https://www.eversoft.lk"
              class="text-primary font-semibold"
              >Eversoft IT Solutions</ULink
            >
            .
          </p>
        </div>
      </footer>
      <!-- Footer End -->
    </div>
  </div>
</template>
