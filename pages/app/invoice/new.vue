<script setup>
import { ref } from "vue";
import { format } from "date-fns";

const items = ref([
  { key: 'item 1', label: 'Item 1', description: 'loram.' },
  { key: 'item 2', label: 'Item 2', description: 'loram.' }
]);

// Define method to remove item
const removeItem = (itemToRemove) => {
  const index = items.value.findIndex(item => item === itemToRemove);
  if (index !== -1) {
    items.value.splice(index, 1);
  }
};

// Define method to add new item
const addItem = () => {
  const newItemKey = 'item ' + (items.value.length + 1);
  const newItem = {
    key: newItemKey,
    label: 'Item ' + (items.value.length + 1),
    description: 'loram.'
  };
  items.value.push(newItem);
};

const rate = ref('');

const date = ref(new Date());
</script>

<template>
  <div>
    <NuxtLayout name="app">
      <div class="grid md:grid-cols-4 sm:grid-cols-2 xsm:grid-cols-1 gap-4">
        <!-- Left side components -->
        <div
          class="p-4 md:col-span-3 sm:col-span-3 xsm:col-span-1 dark:border dark:border-slate-700 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
          <h1 class="text-lg mb-4">Add New Invoice</h1>
          <UInput color="gray" variant="outline" placeholder="Enter title here" />
          <div class="flex gap-2 pt-4">
            <h1 class="font-bold">
              Permalink:
              <span class="font-thin">http://www.example.com/114/</span>
              <UButton class="ml-2" color="gray" variant="solid" size="2xs">Edit</UButton>
            </h1>
          </div>
          <div class="dark:border dark:border-slate-700 rounded-xl p-4 mt-4">
            <h1>Description</h1>
            <div class="my-4">
              <UButton color="gray" variant="solid" size="sm" icon="material-symbols:perm-media-rounded">Add Media
              </UButton>
            </div>
            <UEditor />
          </div>
          <!-- Tab components -->
          <div class="dark:border dark:border-slate-700 rounded-xl p-4 mt-4">
            <UTabs :items="items" class="w-full">
              <template #item="{ item }">
                <UCard>
                  <template #header>
                    <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                      {{ item.label }}
                    </p>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {{ item.description }}
                    </p>
                  </template>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="flex flex-wrap items-center gap-3">
                        <h1 class="mb-1 ml-1">Qty</h1>
                        <UInput class="w-full md:w-auto" color="gray" variant="outline" placeholder="Enter here" />
                      </div>
                      <div class="flex flex-wrap items-center gap-3">
                        <h1 class="mb-1 ml-1">Item Title</h1>
                        <UInput class="w-full md:w-auto" color="gray" variant="outline"
                          placeholder="Enter title here" />
                      </div>
                      <div class="flex flex-wrap items-center gap-3">
                        <h1 class="mb-1 ml-1">Adjust (%)</h1>
                        <UInput class="w-full md:w-auto" color="gray" variant="outline" placeholder="0" />
                      </div>
                      <div class="flex flex-wrap items-center gap-3">
                        <h1 class="mb-1 ml-1">Rate ($)</h1>
                        <UInput class="w-full md:w-auto" color="gray" variant="outline" placeholder="0"
                          v-model="rate" />
                      </div>
                      <div class="flex flex-wrap items-center gap-3">
                        <h1 class="mb-1 ml-1">Amount ($)</h1>
                        <UBadge class="h-10 w-auto text-center font-bold" size="md">
                          $ {{ rate }}
                        </UBadge>
                      </div>
                      <div class="flex flex-wrap items-center gap-3">
                        <h1 class="mb-1 ml-1">Description</h1>
                        <UTextarea class="w-full md:w-auto" size="lg" :rows="1" color="gray" variant="outline"
                          placeholder="Description here" />
                      </div>
                      <div class="flex flex-wrap items-center gap-3">
                        <h1 class="mb-1 ml-1">Taxable</h1>
                        <UCheckbox class="w-full md:w-auto" color="gray" variant="outline" />
                      </div>
                    </div>


                  <template #footer>
                    <div class="flex flex-wrap justify-end gap-3 pt-4 ">
                      <UButton class="" color="primary" @click="removeItem(item)">Remove Item</UButton>
                    </div>
                  </template>
                </UCard>
              </template>
            </UTabs>
            <div class="pt-4">
              <div class="flex flex-wrap justify-between gap-3 pt-4 ">
                <div>
                  <UButton class="" color="primary" @click="addItem">Add Item</UButton>
                </div>
                <div class="dark:border dark:border-slate-700 rounded-xl p-4">
                  <div class="flex items-center gap-4">
                    <Icon name="flowbite:file-invoice-outline" class="text-primary" />
                    <h1 class="text-lg font-semibold">Invoice Totals</h1>
                  </div>
                  <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                  <ul class="flex flex-col gap-2">
                    <li class="flex justify-between">
                      <span>Sub Total</span>
                      <span>$340</span>
                    </li>
                    <li class="flex justify-between">
                      <span>Tax</span>
                      <span>$20</span>
                    </li>
                    <li class="flex justify-between">
                      <span>Total Due</span>
                      <span>$360</span>
                    </li>
                    <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                    <li class="flex justify-between">
                      <span>Total</span>
                      <span>$360</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Left side components -->

        <!-- Right side components -->
        <div class="md:col-span-1 sm:col-span-3 xsm:col-span-1 gap-4">
          <!-- First component on top -->
          <div class="p-4 mb-4 dark:border dark:border-slate-700 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
            <h1 class="text-lg mb-4">Publish</h1>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between">
                <UButton color="red" variant="solid" icon="i-heroicons-trash-20-solid"></UButton>
                <UButton variant="solid">Publish</UButton>
              </div>
            </div>
          </div>
          <!-- Second component at the bottom -->
          <div class="p-4 dark:border dark:border-slate-700 bg-secondary-bkg rounded-xl shadow dark:shadow-black">
            <h1 class="text-lg mb-4">Invoice Details</h1>
            <div class="flex flex-col gap-2">
              <!-- Client -->
              <h1 class="font-bold">Client</h1>
              <div class="flex justify-between pb-2">
                <UButton color="gray" variant="solid" icon="i-heroicons-pencil-square-20-solid" />
                <UButton variant="solid">Add Client</UButton>
              </div>
              <USelect placeholder="Choose Client" size="lg" />
              <!-- Status -->
              <h1 class="font-bold mt-2">Status</h1>
              <USelect size="lg" />
              <!-- Invoice Number -->
              <div class="flex flex-row pt-2">
                <p class="pt-2 mr-2">INV-</p>
                <UInput label="Number" class="w-full" />
              </div>
              <!-- Order Number -->
              <h1 class="font-bold mt-2">Order Number</h1>
              <UInput label="Number" class="w-full" />
              <!-- Created Date -->
              <h1 class="font-bold mt-2">Created Date</h1>
              <!-- Calender Start -->
              <UPopover :popper="{ placement: 'bottom-start' }">
                <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')" class="w-full" />
                <template #panel="{ close }">
                  <UDatePicker v-model="date" @close="close" />
                </template>
              </UPopover>
              <!-- Calender End -->
              <!-- Due Date -->
              <h1 class="font-bold mt-2">Due Date</h1>
              <!-- Calender Start -->
              <UPopover :popper="{ placement: 'bottom-start' }">
                <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')" class="w-full" />
                <template #panel="{ close }">
                  <UDatePicker v-model="date" @close="close" />
                </template>
              </UPopover>
              <!-- Calender End -->
              <USelect size="lg" class="mt-2" placeholder="Payment Settings" />
              <USelect size="lg" class="mt-2" placeholder="Tax Settings" />
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
