<template>
    <Overview :apiUrl="'https://api.jikan.moe/v3/top/anime'" :itemsKey="'top'" />
</template>

<script>
import Overview from "../components/Overview.vue";

export default {
    name: "Anime",
    components: {
        Overview
    }
}
</script>