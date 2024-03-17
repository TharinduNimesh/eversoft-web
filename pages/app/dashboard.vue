<script setup>
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: 'This year',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }, {
    label: 'Previous year',
    data: [10, 20, 70, 50, 67, 85, 90],
    fill: false,
    borderColor: 'rgb(0, 255, 0)',
    tension: 0.1
  }]
};
</script>
<template>
  <div>
    <NuxtLayout name="app">
      <div class="grid md:grid-cols-5 sm:grid-cols-2 xsm:grid-cols-1 gap-4">
        <div class="p-4 md:col-span-2 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
          <div class="grid grid-cols-2">
            <div class="">
              <Icon name="i-heroicons-user-group-20-solid" class="text-4xl" />
              <h1 class="text-lg">Total Users</h1>
              <h1 class="text-3xl">100</h1>
            </div>
            <div class="">
              <h1 class="text-lg">Eversoft :
                <span class="text-lg">100</span>
              </h1>
              <h1 class="text-lg">Chathura :
                <span class="text-lg">100</span>
              </h1>
              <h1 class="text-lg">Tharindu :
                <span class="text-lg">100</span>
              </h1>
            </div>
          </div>
        </div>
        <div class="p-4 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
          <Icon name="i-heroicons-newspaper-20-solid" class="text-4xl" />
          <h1 class="text-lg">Total Post</h1>
          <h1 class="text-3xl">100</h1>
        </div>
        <div class="p-4 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
          <Icon name="bi:cash-coin" class="text-4xl" />
          <h1 class="text-lg">Total Revenue</h1>
          <h1 class="text-3xl">100</h1>
        </div>
        <div class="p-4 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
          <Icon name="fa6-solid:comments" class="text-4xl" />
          <h1 class="text-lg">Total Comments</h1>
          <h1 class="text-3xl">100</h1>
        </div>
      </div>
      <div class="grid md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-4">
        <div class="p-4 md:col-span-2 sm:col-span-2 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
          <h1 class="md:text-lg sm:text-lg">Visitors</h1>
          <UChart type="line" id="myChart" :data="data" />
        </div>
        <div class="md:col-span-1 sm:col-span-2 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
          <h1 class="md:text-lg sm:text-lg">Recent</h1>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
