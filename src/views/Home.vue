<template>
<Overview :apiUrl="'https://api.jikan.moe/v3/search/anime?q=naruto&limit=5'" :itemsKey="'results'" />
<Overview :apiUrl="'https://api.jikan.moe/v3/search/anime?q=sword&limit=5'" :itemsKey="'results'" />
</template>

<script>
import Overview from '../components/Overview.vue';

export default {
    name: "Home",
    components: {
        Overview
    }
};
</script>

<style lang="scss" scoped>
input, button {
    background: transparent;
    border: 0;
    color: #fff;
    padding: 1rem 2rem;
    font-size: 18px;
    font-family: "Lato", sans-serif;
}

input {
    border-bottom: 4px solid #fff;
}

p {
    margin-bottom: 1rem;
    
    &.error {
        color: rgb(180, 70, 70);
    }
}
</style>