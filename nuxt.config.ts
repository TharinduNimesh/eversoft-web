// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  css: ["~/assets/index.css"],
  tailwindcss: {
    cssPath: "~/assets/index.css",
    configPath: "./tailwind.config.ts",
  }
});