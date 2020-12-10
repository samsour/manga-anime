<template>
    <ul>
        <slot />
    </ul>
</template>

<script>

export default {
    name: "Grid",
}
</script>

<style lang="scss" scoped>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 3rem;
    padding: 0 3rem;
    margin: 0 auto;
    max-width: 1200px;
}
</style>