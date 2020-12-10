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

.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}

</style>
