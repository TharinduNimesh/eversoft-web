<script setup>
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
</script>

<template>
  <div>
    <NuxtLayout name="app">
      <div
        class="w-full flex flex-col bg-secondary-bkg dark:border dark:border-slate-700 rounded-xl shadow dark:shadow-black p-4">
        <h1 class="md:text-lg sm:text-lg mb-4">Create Invoice</h1>
        <div class="flex flex">
          <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
            <UButton color="white" label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" />
          </UDropdown>
          <UInput color="gray" variant="outline" placeholder="Search..." />
          <UInput color="gray" variant="outline" placeholder="Search..." />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
