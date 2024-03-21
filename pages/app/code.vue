<script setup>
import hljs from "highlight.js";

hljs.highlightAll();
</script>

<template>
  <pre>
        <code class="language-javascript">
export default defineNuxtConfig({
  plugins
: [
    '~/plugins/bar/baz',
    '~/plugins/bar/foz'
  ]
})
        </code>
    </pre>
</template>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css");
</style>
