<template>
  <div>
    <NuxtLayout name="app">
      <div class="grid md:grid-cols-4 sm:grid-cols-3 xsm:grid-cols-1 gap-4">
        <div
          class="p-4 md:col-span-3 sm:col-span-3 xsm:col-span-1 dark:border dark:border-slate-700 bg-secondary-bkg rounded-xl shadow dark:shadow-black"
        >
          <h1 class="text-lg mb-4">Add New Post</h1>
          <UInput
            color="gray"
            variant="outline"
            placeholder="Enter title here"
          />
          <div class="flex gap-2 pt-4">
            <h1 class="font-bold">
              Permalink:
              <span class="font-thin">http://www.example.com/114/</span>
              <UButton class="ml-2" color="gray" variant="solid" size="2xs"
                >Edit</UButton
              >
              <UButton class="ml-2" color="gray" variant="solid" size="2xs"
                >View Post</UButton
              >
            </h1>
          </div>
          <div class="my-4">
            <UButton
              color="gray"
              variant="solid"
              size="sm"
              icon="material-symbols:perm-media-rounded"
              >Add Media
            </UButton>
          </div>
          <UEditor />
        </div>

        <!-- Right side components -->
        <div
          class="md:col-span-1 sm:col-span-3 xsm:col-span-1 grid grid-rows-2 gap-4"
        >
          <!-- First component on top -->
          <div
            class="p-4 dark:border dark:border-slate-700 bg-secondary-bkg rounded-xl shadow dark:shadow-black"
          >
            <h1 class="text-lg mb-4">Publish</h1>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between">
                <UButton color="gray" variant="solid">Save draft</UButton>
                <UButton color="gray" variant="solid">Preview</UButton>
              </div>
              <div class="flex mt-2">
                <p class="">
                  <Icon name="material-symbols:key-vertical" />
                  Status:<span class="font-bold mr-2"> Draft</span>
                  <UButton color="gray" variant="solid" size="2xs"
                    >edit</UButton
                  >
                </p>
              </div>
              <div class="flex">
                <p class="">
                  <Icon name="material-symbols:visibility-rounded" />
                  Visibility:<span class="font-bold mr-2"> Public</span>
                  <UButton color="gray" variant="solid" size="2xs"
                    >edit</UButton
                  >
                </p>
              </div>
              <div class="flex">
                <p class="">
                  <Icon name="material-symbols:calendar-month-rounded" />
                  Publish:<span class="font-bold mr-2"> immediately</span>
                  <UButton color="gray" variant="solid" size="2xs"
                    >edit</UButton
                  >
                </p>
              </div>
              <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
              <div class="flex justify-between">
                <UButton
                  color="red"
                  variant="solid"
                  icon="i-heroicons-trash-20-solid"
                ></UButton>
                <UButton variant="solid">Publish</UButton>
              </div>
            </div>
          </div>
          <!-- Second component at the bottom -->
          <div
            class="p-4 dark:border dark:border-slate-700 bg-secondary-bkg rounded-xl shadow dark:shadow-black"
          >
            <h1 class="text-lg mb-4">Format</h1>
            <div class="flex flex-col gap-2">
              <UCheckbox color="primary" label="Standard" :model-value="true" />
              <UCheckbox color="primary" label="Aside" :model-value="true" />
              <UCheckbox color="primary" label="Image" :model-value="true" />
              <UCheckbox color="primary" label="Video" :model-value="true" />
              <UCheckbox color="primary" label="Audio" :model-value="true" />
              <UCheckbox color="primary" label="Quote" :model-value="true" />
              <UCheckbox color="primary" label="Link" :model-value="true" />
              <UCheckbox color="primary" label="Gallery" :model-value="true" />
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
