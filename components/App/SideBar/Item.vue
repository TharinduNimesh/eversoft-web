<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  subRoutes: {
    type: Array,
    default: null,
  },
});
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex cursor-pointer" :class="{
      'bg-primary/10': isActive,
    }">
      <span class="w-1" :class="{
      'bg-primary': isActive,
    }"></span>
      <div class="relative flex-1 flex px-5 py-3 items-center gap-3">
        <Icon :name="icon" class="text-2xl" />
        <span class="text font-bold uppercase">{{ name }}</span>
        <Icon v-if="subRoutes" name="ic:round-keyboard-arrow-down" class="absolute text-2xl right-3" />
      </div>
    </div>
    <div class="w-full pl-14 text-gray-500" v-if="subRoutes">
      <div class="w-full py-3 flex items-center gap-4">
        <Icon name="bxs:cricket-ball" class="text-sm" />
        <span class="text-sm font-semibold uppercase">Add New Post</span>
      </div>
    </div>
  </div>
</template>
