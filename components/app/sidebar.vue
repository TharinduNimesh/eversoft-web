<template>
    <div class="flex">
        <!-- Sidebar -->
        <div class="bg-secondary-bkg sm:w-60 min-h-screen w-14 pt-4 transition-all">
            <div class="text-center text-white p-6"></div>
            <ul class="mt-11">
                <li v-for="(item, index) in menuItems" :key="index" @click="activateItem(index)"
                    :class="{ active: activeIndex === index }"
                    class="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
                    <Icon :name="item.icon" class="h-6 w-6" />
                    <span
                        class="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
                        {{ item.title }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { title: 'Dashboard', icon: 'material-symbols:home-outline-rounded', route: '/dashboard' },
                { title: 'Blog', icon: 'material-symbols:home-outline-rounded', route: '/blog' },
            ],
            activeIndex: 0
        };
    },
    methods: {
        activateItem(index) {
            this.activeIndex = index;
        }
    }
};
</script>

<style scoped>
li {
    position: relative;
}

li.active {
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity, 1));
}

li.active span {
    color: white;
}

li.active::after {
    content: '';
    background: #00d0ff;
    height: 100%;
    width: 5px;
    position: absolute;
    left: 0;
    top: 0;
}
</style>