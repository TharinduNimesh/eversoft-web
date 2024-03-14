<script setup>
const uiStore = useUIStore();
defineProps(["color"]);
</script>

<template>
  <span
    @click="uiStore.setColor(color)"
    :class="`w-3 h-3 rounded-full bg-${color}-500`"
  ></span>
</template>
