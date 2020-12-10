<template>
    <h2>Manga</h2>
    <Grid v-if="fetchedItems.length > 0">
        <Card v-for="item in fetchedItems" :key="item.title" v-bind="item" msg="Welcome to Your Vue.js App" />
    </Grid>
</template>

<script>
import Card from "../components/Card.vue";
import Grid from "../components/Grid.vue";

export default {
    name: "Manga",
    components: {
        Grid,
        Card,
    },
    data: () => ({
        apiUrl: 'https://api.jikan.moe/v3/top/manga',
        items: []
    }),
    created() {
        fetch(this.apiUrl)
        .then(response => response.json())
        .then(data => {
            data.top.forEach(item => this.items.push(item));
        })
    },
    computed: {
        fetchedItems() {
            return this.items;
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#app {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
}
</style>
