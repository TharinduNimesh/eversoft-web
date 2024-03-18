<script setup>
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [{
    label: 'This year',
    data: [65, 59, 80, 81, 56, 55, 40, 53, 65, 75, 49, 80],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }, {
    label: 'Previous year',
    data: [10, 20, 70, 50, 67, 85, 90, 40, 70, 80, 70, 100],
    fill: false,
    borderColor: 'rgb(0, 255, 0)',
    tension: 0.1
  }]
};

const recents = [
  { id: 1, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum provident ea doloremque obcaecati vitae saepe, nesciunt ut adipisci natus dolorem assumenda quae ab ullam cum, ex autem, aliquid fugiat?", date: "2024-03-17" },
  { id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum provident ea doloremque obcaecati vitae saepe, nesciunt ut adipisci natus dolorem assumenda quae ab ullam cum, ex autem, aliquid fugiat?", date: "2024-03-16" },
  { id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum provident ea doloremque obcaecati vitae saepe, nesciunt ut adipisci natus dolorem assumenda quae ab ullam cum, ex autem, aliquid fugiat?", date: "2024-03-16" },
  { id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum provident ea doloremque obcaecati vitae saepe, nesciunt ut adipisci natus dolorem assumenda quae ab ullam cum, ex autem, aliquid fugiat?", date: "2024-03-16" },
  { id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum provident ea doloremque obcaecati vitae saepe, nesciunt ut adipisci natus dolorem assumenda quae ab ullam cum, ex autem, aliquid fugiat?", date: "2024-03-16" },
  { id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum provident ea doloremque obcaecati vitae saepe, nesciunt ut adipisci natus dolorem assumenda quae ab ullam cum, ex autem, aliquid fugiat?", date: "2024-03-16" },
  { id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum provident ea doloremque obcaecati vitae saepe, nesciunt ut adipisci natus dolorem assumenda quae ab ullam cum, ex autem, aliquid fugiat?", date: "2024-03-16" },
  { id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum provident ea doloremque obcaecati vitae saepe, nesciunt ut adipisci natus dolorem assumenda quae ab ullam cum, ex autem, aliquid fugiat?", date: "2024-03-16" },
  { id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum provident ea doloremque obcaecati vitae saepe, nesciunt ut adipisci natus dolorem assumenda quae ab ullam cum, ex autem, aliquid fugiat?", date: "2024-03-16" },
]

</script>

<template>
  <div>
    <NuxtLayout name="app">
      <div class="grid md:grid-cols-5 sm:grid-cols-2 xsm:grid-cols-1 gap-4">
        <div
          class="p-4 md:col-span-2 dark:border dark:border-slate-700 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
          <div class="grid grid-cols-2">
            <div class="">
              <Icon name="i-heroicons-user-group-20-solid" class="text-4xl text-blue-800" />
              <h1 class="text-lg">Total Users</h1>
              <h1 class="text-3xl text-blue-800 font-bold">102.4K</h1>
            </div>
            <div class="text-right">
              <h1 class="text-md">Eversoft :
                <span class="text-lg text-blue-800">40.1K</span>
              </h1>
              <h1 class="text-md">Chathura :
                <span class="text-lg text-blue-800">32.1K</span>
              </h1>
              <h1 class="text-md">Tharindu :
                <span class="text-lg text-blue-800">30.2K</span>
              </h1>
            </div>
          </div>
        </div>
        <div class="p-4 bg-secondary-bkg dark:border dark:border-slate-700 rounded-xl shadow dark:shadow-black">
          <Icon name="i-heroicons-newspaper-20-solid" class="text-4xl text-orange-500" />
          <h1 class="text-lg">Total Post</h1>
          <h1 class="text-3xl text-orange-500 font-bold">48</h1>
        </div>
        <div class="p-4 bg-secondary-bkg dark:border dark:border-slate-700 rounded-xl shadow dark:shadow-black">
          <Icon name="bi:cash-coin" class="text-4xl text-green-600" />
          <h1 class="text-lg">Total Revenue</h1>
          <h1 class="text-3xl text-green-600 font-bold">500,420.00</h1>
        </div>
        <div class="p-4 bg-secondary-bkg dark:border dark:border-slate-700 rounded-xl shadow dark:shadow-black">
          <Icon name="fa6-solid:comments" class="text-4xl text-pink-800" />
          <h1 class="text-lg">Total Comments</h1>
          <h1 class="text-3xl text-pink-800 font-bold">54.2K</h1>
        </div>
      </div>
      <div class="grid md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-4">
        <div
          class="p-4 md:col-span-2 dark:border dark:border-slate-700 sm:col-span-2 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
          <h1 class="md:text-lg sm:text-lg pb-5">Visitors</h1>
          <div class="flex justify-end gap-4">
            <div class="text-right">
              <span class="text-yellow-500 text-xl px-5 font-bold">24K</span>
              <h1 class="text-sm mb-4">
                New Visitors
              </h1>
            </div>
            <div class="text-right">
              <span class="text-yellow-500 text-xl px-1 font-bold">2.5%</span>
              <Icon name="material-symbols:arrow-warm-up" class="text-2xl text-green-500 -mt-3 mr-2" />
              <h1 class="text-sm mb-4">
                Visitors Increase
              </h1>
            </div>
          </div>
          <UChart type="line" id="myChart" :data="data" />
        </div>
        <div
          class="p-4 md:col-span-1 sm:col-span-2 dark:border dark:border-slate-700 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
          <h1 class="md:text-lg sm:text-lg mb-4">Recent Blogs</h1>
          <div class="rounded-md h-[509px] overflow-y-scroll">
            <div v-for="recent in recents" :key="recent.id"
              class="flex justify-between items-center border dark:border-slate-700 rounded-md p-2 mb-1">
              <div class="flex items-center">
                <img src="https://media1.thrillophilia.com/filestore/ur4lt5i6yjilg39oe4at5j1syxmx_IMG20of20-%202.webp"
                  alt="img" class="w-12 border rounded-md">
                <div class="ml-2">
                  <h1 class="text-md line-clamp-1">{{ recent.text }}</h1>
                  <h1 class="text-xs">{{ recent.date }}</h1>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <ULink to="/signup">
                  <Icon name="i-heroicons-pencil-square-20-solid" class="text-2xl cursor-pointer" />
                </ULink>
                <ULink to="/signup">
                  <Icon name="i-heroicons-trash-20-solid" class="text-2xl text-red-700 cursor-pointer" />
                </ULink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
