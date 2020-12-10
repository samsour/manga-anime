<template>
<div>
    <div v-if="activeStep == 1">
        <p>{{ step1.pleaseEnterYourName }}</p>
        <input v-model="name" />
        <button @click="saveName">Weiter</button>
        <p v-if="step1.showNameError" class="error">{{ step1.invalidName }}</p>
    </div>

    <div v-if="activeStep == 2">
        <p>Hallo {{ name }}!</p>
        <p>Was suchst du heute?</p>
        <Navigation />    
    </div>
</div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
    name: "Home",
    components: {
        Navigation
    },
    data: () => ({
        step1: {
            pleaseEnterYourName: "Wie heißt du?",
            invalidName: "Bitte gib einen Namen an.",
            showNameError: false,
        },
        activeStep: 1,
        name: "",
    }),
    computed: {

    },
    methods: {
        saveName() {
            if (this.name.length > 0) {
                this.activeStep++;
            } else {
                this.showNameError = true;
            }
        }
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