<!-- DashboardPage.vue -->

<template>
  <div class="flex">
    <sidebar />
    <section class="flex-1 bg-primary-bkg">
      <p>Hello</p>
    </section>
  </div>
</template>

<script>
import sidebar from '~/components/app/sidebar.vue';

export default {
  name: 'DashboardPage',
  components: {
    sidebar
  }
};
</script>