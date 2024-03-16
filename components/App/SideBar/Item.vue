<script setup lang="ts">
import type { RouteOptions } from "~/datatypes";

const props = defineProps({
  options: {
    type: Object as () => RouteOptions,
    required: true,
  },
});
const router = useRouter();
const sidebarStore = useSidebarStore();
const isActive = computed(() => {
  return router.currentRoute.value.path.includes(props.options.path);
});

function takeAction() {
  if (props.options.subRoutes) {
    if (!sidebarStore.isOpen) {
      sidebarStore.toggle();
    }
    sidebarStore.setOpenedSubRoute(props.options.path);
  } else {
    router.push(props.options.path);
  }
}
</script>

<template>
  <div class="w-full flex flex-col">
    <div
      class="w-full flex cursor-pointer"
      :class="{
        'bg-primary/10': isActive,
      }"
      @click="takeAction"
    >
      <span
        class="w-1"
        :class="{
          'bg-primary': isActive,
        }"
      ></span>
      <div
        class="relative flex-1 flex px-5 py-4 items-center gap-3"
        :class="{
          'md:justify-center': !sidebarStore.isOpen,
        }"
      >
        <Icon
          :name="options.icon"
          class="text-2xl"
          :class="{
            'md:text-3xl': !sidebarStore.isOpen,
          }"
        />
        <span
          class="text font-bold uppercase"
          :class="{
            'md:hidden': !sidebarStore.isOpen,
          }"
          >{{ options.name }}</span
        >
        <Icon
          v-show="options.subRoutes"
          name="ic:round-keyboard-arrow-down"
          class="absolute text-2xl right-3 transition-transform duration-300"
          :class="{
            'md:!hidden': !sidebarStore.isOpen,
            '-rotate-90': !(sidebarStore.openedSubRoute == props.options.path),
          }"
        />
      </div>
    </div>
    <div
      class="w-full pl-14 text-gray-500 transition-[max-height] duration-300 overflow-hidden"
      v-show="options.subRoutes"
      :class="{
        'md:hidden': !sidebarStore.isOpen,
        'max-h-0': !(sidebarStore.openedSubRoute == props.options.path),
      }"
    >
      <AppSideBarSubItem
        v-for="subRoute in options.subRoutes"
        :key="subRoute.path"
        :options="subRoute"
      />
    </div>
  </div>
</template>
