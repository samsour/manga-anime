<template>
    <Navigation />
    <!-- <transition name="fade" mode="out-in"> -->
        <router-view></router-view>
    <!-- </transition> -->
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
    name: "App",
    components: {
        Navigation
    }
}
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
    color: #d1dbe6;
    background: #010101;
    min-height: 100vh;
}

</style>
