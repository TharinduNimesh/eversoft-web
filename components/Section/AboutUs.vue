<template>
  <section class="relative flex justify-center">
    <img
      class="absolute -bottom-5 left-0 opacity-30 hidden md:flex w-[200px] z-0"
      :src="`/img/elements/dotset-${$colorMode.value}.png`"
    />
    <div class="container grid grid-cols-2 px-4 py-16 lg:px-8 gap-16 lg:gap-5">
      <!-- Content Start -->
      <div
        class="col-span-full lg:col-span-1 flex flex-col gap-3 justify-center order-2 lg:order-1 z-10"
      >
        <span class="text-xl uppercase text-gray-400 dark:text-gray-500"
          >Bring your business to next level</span
        >
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-recoleta">
          Unlocking Your Digital Potential with Top-tier Software Solutions
        </h2>
        <p class="text-xl font-roboto text-gray-600 dark:text-slate-400">
          Experience unparalleled quality and efficiency. Elevate your business
          with our tailored software solutions and expert support.
        </p>
        <div class="py-4 flex justify-center lg:justify-start">
          <UButton
            label="Learn More"
            icon="solar:arrow-right-outline"
            trailing
          />
        </div>
      </div>
      <!-- Content End -->

      <!-- Image Set Start -->
      <div
        class="col-span-full lg:col-span-1 flex justify-center order-1 lg:order-2"
      >
        <div class="relative w-full lg:w-2/3 flex justify-center items-center">
          <!-- Technologies Start -->
          <a
            class="absolute -top-10 left-0 cursor-pointer hover:pause hover:opacity-100 animate-float grid place-items-center p-3 w-20 h-20 rounded-lg bg-slate-200/40 dark:bg-gray-950/50 shadow-lg dark:shadow-black"
            href="https://nuxt.com/"
          >
            <img src="/img/technologies/nuxt.svg" alt="Nuxt JS" />
          </a>

          <a
            class="absolute top-10 right-0 cursor-pointer hover:pause hover:opacity-100 md:-right-5 animate-float-reverse grid place-items-center p-3 w-20 h-20 rounded-lg bg-slate-200/40 dark:bg-gray-950/50 shadow-lg dark:shadow-black z-10"
            href="https://tailwindcss.com/"
          >
            <img src="/img/technologies/tailwindcss.png" alt="Tailwind CSS" />
          </a>

          <a
            class="absolute bottom-10 left-5 cursor-pointer hover:pause hover:opacity-100 animate-float-reverse grid place-items-center p-3 w-20 h-20 rounded-lg bg-slate-200/40 dark:bg-gray-950/50 shadow-lg dark:shadow-black z-10"
            href="https://www.electronjs.org/"
          >
            <img src="/img/technologies/electron-js.png" alt="Electron JS" />
          </a>

          <a
            class="absolute -bottom-10 right-12 cursor-pointer hover:pause hover:opacity-100 animate-float grid place-items-center p-3 w-20 h-20 rounded-lg bg-slate-200/40 dark:bg-gray-950/50 shadow-lg dark:shadow-black z-10"
            href="https://supabase.com/"
          >
            <img src="/img/technologies/supabase.png" alt="Supabase" />
          </a>
          <!-- Technologies End -->

          <div
            class="relative w-[330px] h-[330px] flex justify-center items-center p-14 rounded-full bg-slate-200/40 dark:bg-gray-950/50 shadow-lg dark:shadow-black z-0"
          >
            <img
              class="w-[90px] absolute bottom-14 -right-8 opacity-65"
              :src="`/img/elements/shape_32-${$colorMode.value}.svg`"
            />
            <img
              src="/img/illustrations/meditating-man.webp"
              alt="A meditating man"
            />
          </div>
        </div>
      </div>
      <!-- Image Set End -->
    </div>
  </section>
</template>
