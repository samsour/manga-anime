<template>
    <Overview :apiUrl="'https://api.jikan.moe/v3/top/manga'" :itemsKey="'top'" />
</template>

<script>
import Overview from "../components/Overview.vue";

export default {
    name: "Manga",
    components: {
        Overview
    }
}
</script>