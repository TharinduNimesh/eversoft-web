<script setup>
const sidebarStore = useSidebarStore();
const routes = [
  {
    name: "Dashboard",
    icon: "material-symbols-light:home",
    path: "/app/dashboard",
  },
  {
    name: "Blog & Posts",
    icon: "material-symbols:post-rounded",
    path: "/app/posts",
    subRoutes: [
      {
        name: "Add New Post",
        path: "/app/posts/new",
      },
      {
        name: "Manage Posts",
        path: "/app/posts",
      },
    ],
  },
  {
    name: "Invoice",
    icon: "mdi:invoice-text-fast",
    path: "/app/invoice",
    subRoutes: [
      {
        name: "New Invoice",
        path: "/app/invoice/new",
      },
      {
        name: "Manage Invoice",
        path: "/app/invoice",
      },
    ],
  },
];
</script>

<template>
  <div class="w-full md:w-[300px] absolute md:static flex h-screen p-4 md:pr-0 z-50" :class="{
    '-ml-[100%] md:ml-0 md:!w-[100px]': !sidebarStore.isOpen,
  }">
    <div class="w-full bg-secondary-bkg rounded-xl shadow-lg dark:shadow-black">
      <div class="w-full flex pt-5 px-5 items-center justify-between">
        <div class="flex gap-5">
          <Logo class="w-14" :class="{
    'md:w-10': !sidebarStore.isOpen,
  }" />
          <div class="w-full flex flex-col" :class="{
    'md:hidden': !sidebarStore.isOpen,
  }">
            <span class="text-lg font-bold uppercase">Eversoft</span>
            <span class="text-xs font-semibold text-gray-500 uppercase">
              Control Panel
            </span>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <UButton icon="material-symbols:close" color="gray" variant="ghost" class="rounded-full md:hidden"
            @click="$emit('toggle-sidebar', $event)" />
        </div>
      </div>

      <div class="px-5">
        <UDivider class="py-5" />
      </div>

      <!-- Routes Start -->
      <div class="w-full flex flex-col gap-1">
        <AppSideBarItem v-for="route in routes" :key="route.name" :options="route" />
      </div>
      <!-- Routes End -->
    </div>
  </div>
</template>
