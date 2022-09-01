import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ItemMusic from '../views/ItemMusic.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ItemMusic',
    name: 'ItemMusic',
    component: ItemMusic
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
