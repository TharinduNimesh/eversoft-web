<script setup>
const routes = [
  {
    name: "Dashboard",
    icon: "material-symbols:home-outline-rounded",
    route: "/dashboard",
  },
  {
    name: "Blog",
    icon: "material-symbols:home-outline-rounded",
    route: "/blog",
  },
];
</script>

<template>
  <div class="flex h-screen p-4">
    <div
      class="w-[300px] bg-secondary-bkg rounded-xl shadow-lg dark:shadow-black"
    >
      <div class="w-full flex pt-5 px-5 gap-5 items-center">
        <Logo class="w-14" />
        <div class="w-full flex flex-col">
          <span class="text-lg font-bold uppercase">Eversoft</span>
          <span class="text-xs font-semibold text-gray-500 uppercase">
            Control Panel
          </span>
        </div>
      </div>

      <div class="px-5">
        <UDivider class="py-5" />
      </div>

      <!-- Routes Start -->
      <div class="w-full flex flex-col gap-1">
        <AppSideBarItem
          name="Dashboard"
          icon="material-symbols-light:home"
          :is-active="true"
        />
        <AppSideBarItem
          name="Blog & Posts"
          icon="material-symbols:post-rounded"
          :sub-routes="[]"
        />
      </div>
      <!-- Routes End -->
    </div>
  </div>
</template>
