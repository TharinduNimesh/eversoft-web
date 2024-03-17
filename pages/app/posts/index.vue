<script setup lang="ts">
const sort = ref({
  column: 'name',
  direction: 'desc'
})

const columns = [{
  label: 'Title',
  key: 'title',
  sortable: true
}, {
  label: 'CATEGORIES',
  key: 'categories',
}, {
  label: 'DATE',
  key: 'date',
  sortable: true
}, {
  label: 'THUMBNAIL',
  key: 'thumbnail',
}, {
  key: 'actions',
}]

const people = [{
  id: 1,
  title: 'Front-end Developer',
  categories: 'lindsay.walton@example.com',
  date: 'Member',
  thumbnail: 'https://randomuser.me/api',
}, {
  id: 2,
  title: 'Designer',
  categories: 'courtney.henry@example.com',
  date: 'Admin',
  thumbnail: 'https://randomuser.me/api',
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
      <div class="w-full flex flex-col bg-secondary-bkg rounded-xl shadow dark:shadow-black p-4">
        <p>Hello</p>

        <div class="border border-gray-300 dark:border-gray-700 rounded-lg">
          <UTable :sort="sort" :columns="columns" :rows="people">
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