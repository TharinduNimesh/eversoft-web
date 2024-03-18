<script setup>
const columns = [{
  label: 'ID',
  key: 'id',
}, {
  label: 'NAME',
  key: 'name',
}, {
  label: 'TITLE',
  key: 'title',
}, {
  label: 'EMAIL',
  key: 'email',
}, {
  label: 'ROLE',
  key: 'role',
}, {
  key: 'actions',
}]

const people = [{
  id: 1,
  name: 'Front-end Developer',
  title: 'Director of Product',
  email: 'lindsay.walton@example.com',
  role: 'Member',
}, {
  id: 2,
  name: 'Front-end Developer',
  title: 'Director of Product',
  email: 'lindsay.walton@example.com',
  role: 'Member',
}]

const items = (row) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Hide',
    icon: 'i-heroicons-archive-box-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]

</script>

<template>
  <div>
    <NuxtLayout name="app">
      <!-- Table Start -->
      <div
        class="w-full flex flex-col bg-secondary-bkg dark:border dark:border-slate-700 rounded-xl shadow dark:shadow-black p-4">
        <h1 class="md:text-lg sm:text-lg mb-4">Manage Invoice</h1>
        <!-- Search & Filter Area Start -->
        <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div class="flex flex-wrap gap-2">
            <UDropdown class="flex-shrink-0" :items="Category" mode="hover" :popper="{ placement: 'bottom-start' }">
              <UButton color="white" label="Category" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
            <UDropdown class="flex-shrink-0" :items="PostSeries" mode="hover" :popper="{ placement: 'bottom-start' }">
              <UButton color="white" label="Post Series" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
            <UButton color="gray" variant="solid" class="flex-shrink-0">Filter</UButton>
          </div>
          <div class="flex flex-wrap gap-2">
            <UInput color="gray" variant="outline" placeholder="Search..." class="flex-grow" />
            <UButton color="gray" variant="solid" class="flex-shrink-0">Search</UButton>
          </div>
        </div>
        <!-- Search & Filter Area End -->
        <div class="border border-gray-300 dark:border-gray-700 rounded-lg">
          <UTable :rows="people" :columns="columns">
            <template #actions-data="{ row }">
              <UDropdown :items="items(row)">
                <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
              </UDropdown>
            </template>
          </UTable>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
