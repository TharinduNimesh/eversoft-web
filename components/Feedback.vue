<template>
    <div class="scroller" :data-speed="scrollSpeed">
        <div class="flex justify-center md:justify-start md:max-w-screen-xl mx-auto">
            <ul class="tag-list scroller__inner flex flex-wrap justify-center md:justify-start gap-4">
                <li v-for="(tag, index) in tagsWithComments" :key="index"
                    class="tag-item p-4 h-32 md:w-36 md:h-24 bg-primary-400 rounded shadow-md">
                    <p>{{ tag.name }}</p>
                    <p class="line-clamp-6">{{ tag.comment }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tagsWithComments: [
                { name: 'Jhon', comment: 'Hypertext Markup Language - the standard markup language for documents designed to be displayed in a web browser.' },
                { name: 'Doe', comment: 'Cascading Style Sheets - a style sheet language used for describing the presentation of a document written in HTML.' },
                { name: 'Devin', comment: 'JavaScript - a programming language that enables interactive web pages and dynamic content.' },
                { name: 'Jeson', comment: 'Static Site Generation - a technique used to generate HTML pages at build time.' },
                { name: 'Casse', comment: 'Web Development - the process of building and maintaining websites.' },
                { name: 'Chathura', comment: 'Animation - the technique of creating the illusion of motion and shape change.' },
                { name: 'Sudaraka', comment: 'User Interface/User Experience - the overall look and feel of a product and its usability.' }
            ],
            scrollSpeed: 'slow'
        };
    },
    mounted() {
        const scrollers = document.querySelectorAll(".scroller");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            this.addAnimation(scrollers);
        }
    },
    methods: {
        addAnimation(scrollers) {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);
                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        },
    },
};
</script>

<style lang="css">
.scroller {
    /* max-width: 1200px; */
    margin: 0 auto;
}

.scroller__inner {
    padding-top: 1rem;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.scroller[data-animated="true"] {
    overflow: hidden;
    -webkit-mask: linear-gradient(90deg,
            transparent,
            white 20%,
            white 80%,
            transparent);
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-direction="right"] {
    --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
    --_animation-direction: forwards;
}

.scroller[data-speed="fast"] {
    --_animation-duration: 20s;
}

.scroller[data-speed="slow"] {
    --_animation-duration: 60s;
}

@keyframes scroll {
    to {
        transform: translate(calc(-50% - 0.5rem));
    }
}


/* general styles */

:root {
    --clr-neutral-100: hsl(0, 0%, 100%);
    --clr-primary-100: hsl(205, 15%, 58%);
    --clr-primary-400: hsl(215, 25%, 27%);
    --clr-primary-800: hsl(217, 33%, 17%);
    --clr-primary-900: hsl(218, 33%, 9%);
}

html {
    color-scheme: dark;
}

body {
    display: grid;
    min-height: 100vh;
    place-content: center;
    font-family: system-ui;
    font-size: 1.125rem;
    background-color: var(--clr-primary-800);
}

.tag-list {
    margin: 0;
    padding-inline: 0;
    list-style: none;
}

.tag-list li {
    padding: 1rem;
    height: 215px;
    width: 360px;
    background: var(--clr-primary-400);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem -0.25rem var(--clr-primary-900);
}

.test {
    background: red !important;
}
</style>