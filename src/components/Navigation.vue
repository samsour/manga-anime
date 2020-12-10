<template>
    <nav>
        <ul>
            <router-link v-for="link in links" :key="link.url" :to="link.url">{{ link.label }}</router-link> 
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    data: () => ({
        links: [
            {
                label: "Info",
                url: "/"
            },
            {
                label: "Anime",
                url: "/anime"
            },
            {
                label: "Manga",
                url: "/manga"
            },
        ]
    })
}
</script>

<style lang="scss" scoped>
nav {
    padding: 4rem 2rem;
}

ul {
    display: flex;
    margin: 0;
    list-style-type: none;
    justify-content: center;
}

li {
    margin: 0 1rem;
}

a {
    display: block;
    text-decoration: none;
    padding: 1rem;
    font-size: 22px;
    color: #fff;
    transition: 200ms ease-out;

    &:hover {
        background: #111;
        color: #fff
    }
}

.router-link-active {
    background: #111;
}

</style>