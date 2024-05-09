<script setup>
useHead({
  title: "Eversoft | Software Company in Sri Lanka",
  meta: [
    {
      name: "description",
      content:
        "Eversoft IT Solutions: Leading software company in Sri Lanka with over 2 years of experience in web, mobile, and desktop application development since 2021. Contact us for innovative solutions tailored to your needs.",
    },
    {
      name: "keywords",
      content:
        "Eversoft, Eversoft IT Solutions, Sri Lanka, software development, web development, mobile app development, desktop app development, technology solutions, experienced developers, innovative solutions, software company in sri lanka, software development company in sri lanka, software development company, software company, software development, software development company in colombo, software development company in kandy, software development company in galle, software development company in jaffna, software development company in negombo, software development company in kurunegala, software development company in matara, software development company in ratnapura, software development company in badulla, software development company in anuradhapura, software development company in trincomalee, software",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div
    class="w-full h-full bg-[url(/img/background-small.webp)] sm:bg-[url(/img/background.webp)] bg-secondary-bkg bg-contain bg-no-repeat bg-left-top"
  >
    <NuxtLayout name="home">
      <!-- Sections Start -->
      <SectionLanding />
      <SectionAboutUs />
      <SectionExperience />
      <!-- Sections End -->
    </NuxtLayout>
  </div>
</template>
