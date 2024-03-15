// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/index.css",
    configPath: "./tailwind.config.ts",
  }
});