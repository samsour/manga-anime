<template>

    <div v-if="fetchedItems.length > 0">
        <input placeholder="Suche" v-model="query" />

        <transition-group
            name="list"
            tag="ul"
        >
            <li v-for="(item, index) in computedList" :key="item.mal_id" :data-index="index">
                <Card v-bind="item" />
            </li>
        </transition-group>
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    name: "Overview",
    components: {
        Card,
    },
    props: ['apiUrl','itemsKey'],
    data: () => ({
        items: [],
        query: '',
    }),
    created() {
        fetch(this.apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data[this.itemsKey].forEach(item => this.items.push(item));
        })
    },
    computed: {
        fetchedItems() {
            return this.items;
        },
        computedList() {
            var vm = this
            return this.fetchedItems.filter((item) => {
                return item.title.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
            })
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

h2 {
  margin-bottom: 2rem;
}

input {
    background: transparent;
    border: 2px solid #fff;
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 18px;
    font-family: "Lato", sans-serif;
    color: #fff;
}

ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 3rem;
    padding: 0 3rem;
    margin: 0 auto 2rem;;
    max-width: 1200px;
    list-style-type: none;
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
