<!-- DashboardPage.vue -->

<template>
    <div class="flex">
        <sidebar />
        <navbar />
        <section class="flex-1 bg-primary-bkg">
            <p>Hello</p>
        </section>
    </div>
</template>

<script>
import Navbar from '~/components/app/navbar.vue';
import sidebar from '~/components/app/sidebar.vue';

export default {
    name: 'BlogPage',
    components: {
        sidebar,
        Navbar
    }
};
</script>