import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anime',
    name: 'Anime',
    component: () => import(/* webpackChunkName: "about" */ '../views/Anime.vue')
  },
  {
    path: '/manga',
    name: 'Manga',
    component: () => import(/* webpackChunkName: "about" */ '../views/Manga.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
