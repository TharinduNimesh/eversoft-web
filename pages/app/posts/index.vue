<script setup lang="ts">
import { CategoryScale } from 'chart.js';
import { format } from 'date-fns';

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

const Category = [
  [{
    label: 'Technology',
  }, {
    label: 'Design',
  }, {
    label: 'Business',
  }, {
    label: 'Culture',
  }, {
    label: 'Politics',
  }, {
    label: 'Science',
  }, {
    label: 'Health',
  }, {
    label: 'Style',
  }, {
    label: 'Travel',
  }, {
    label: 'Opinion',
  }]
]

const PostSeries = [
  [{
    label: 'Technology',
  }, {
    label: 'Design',
  }, {
    label: 'Business',
  }, {
    label: 'Culture',
  }, {
    label: 'Politics',
  }, {
    label: 'Science',
  }, {
    label: 'Health',
  }, {
    label: 'Style',
  }, {
    label: 'Travel',
  }, {
    label: 'Opinion',
  }]
]

const date = ref(new Date())

</script>

<template>
  <div>
    <NuxtLayout name="app">
      <div
        class="w-full flex flex-col bg-secondary-bkg dark:border dark:border-slate-700 rounded-xl shadow dark:shadow-black p-4">
        <h1 class="md:text-lg sm:text-lg mb-4">Manage Posts</h1>
        <!-- Search & Filter Area Start -->
        <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div class="flex flex-wrap gap-2">
            <UDropdown class="flex-shrink-0" :items="Category" mode="hover" :popper="{ placement: 'bottom-start' }">
              <UButton color="white" label="Category" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
            <!-- Calender Start -->
            <UPopover :popper="{ placement: 'bottom-start' }">
              <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')" />
              <template #panel="{ close }">
                <DatePicker v-model="date" @close="close" />
              </template>
            </UPopover>
            <!-- Calender End -->
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

        <!-- Table Start -->
        <div class="border border-gray-300 dark:border-gray-700 rounded-lg">
          <UTable :sort="sort" :columns="columns" :rows="people">
            <template #actions-data="{ row }">
              <UDropdown :items="items(row)">
                <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
              </UDropdown>
            </template>
          </UTable>
        </div>
        <!-- Table End -->
      </div>
    </NuxtLayout>
  </div>
</template>