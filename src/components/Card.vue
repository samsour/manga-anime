<template>
    <li>
        <a :href="url">
            <figure>
                <div class="shader"></div>
                <img :src="image_url" :alt="title">
                <figcaption>
                    <div class="rank">{{ rank }}</div>
                    <div class="title">{{ title }}</div>

                </figcaption>
            </figure>
        </a>
    </li>
</template>

<script>
export default {
    name: 'Card',
    props: [
        'end_date',
        'image_url',
        'mal_id',
        'members',
        'rank',
        'score',
        'start_date',
        'title',
        'type',
        'url',
        'volumes'
    ]
}
</script>

<style lang="scss" scoped>
li {
    display: block;
}

a {
    display: block;
    position: relative;
    height: 100%;
    width: 100%;

    &:hover {
        figcaption {
            opacity: 1;    
            transform: scale(1.1);
        }

        .shader {
            opacity: 0.5;
        }
    }
}


figure {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.shader {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    transition: opacity 250ms ease-out;
    will-change: opacity;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

figcaption {
    position: absolute;
    font-weight: 900;
    opacity: 0;
    transition: all 250ms ease-out;
    transition-delay: 100ms;
    will-change: opacity, transform;

    .rank {
        color: #999;
        margin-bottom: 5px;
    }
    .title {
        color: #fff;
        font-size: 32px;
    }
    
}
</style>