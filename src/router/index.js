import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MessageboardView from '../views/MessageBoardView.vue'
import GalleryView from '../views/GalleryView.vue'
import MessageCreateView from '../views/MessageCreateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/messageboard',
    name: 'messageboard',
    component: MessageboardView,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView,
  },
  {
    path: '/messageboard/create',
    name: 'messageCreate',
    component: MessageCreateView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
