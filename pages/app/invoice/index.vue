<script setup>
const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    id: 3,
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Member",
  },
  {
    id: 4,
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner",
  },
  {
    id: 6,
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floyd.miles@example.com",
    role: "Member",
  },
];
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
          <UTable :rows="people" />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
