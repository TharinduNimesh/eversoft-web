<script setup>
defineProps({
  placeholder: {
    type: String,
    default: "••••••••••••",
  },
  modelValue: String,
});

const type = ref("password");
const isPassword = computed(() => type.value == "password");

function togglePassword() {
  type.value = isPassword.value ? "text" : "password";
}
</script>

<template>
  <UInput
    :placeholder="placeholder"
    :ui="{ icon: { trailing: { pointer: '' } } }"
    :type="type"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <template #trailing>
      <div @click="togglePassword">
        <Icon
          v-if="isPassword"
          name="material-symbols:visibility-off-rounded"
          class="cursor-pointer"
        />
        <Icon
          v-else
          name="material-symbols:visibility-rounded"
          class="cursor-pointer"
        />
      </div>
    </template>
  </UInput>
</template>
