<script setup>
import Chart from "chart.js/auto";
const props = defineProps({
  data: Object,
  id: String,
  type: String
});

onMounted(() => {
  const ctx = document.getElementById(props.id);
  new Chart(ctx, {
    type: props.type,
    data: props.data,
  });
});
</script>

<template>
  <div>
    <canvas :id="id"></canvas>
  </div>
</template>
