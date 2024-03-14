<script setup>
import { useUIStore } from "~/stores/ui.store";

const uiStore = useUIStore();
</script>

<template>
  <div class="w-full h-screen flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold">Home Page</h1>
    <UButton label="Submit" @click="uiStore.setColor('green')" />
  </div>
</template>
