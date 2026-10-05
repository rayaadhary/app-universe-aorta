import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Register from './pages/Register.vue'

// ponytail: import statis, dua halaman tidak perlu lazy loading
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/daftar', component: Register },
  ],
})
