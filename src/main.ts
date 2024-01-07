import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

const router = createRouter({
  history: createWebHistory('/magic/'),
  routes: [
    { path: '/', component: () => import('./pages/welcome.vue') },
    { path: '/home', component: () => import('./pages/home.vue') },
    { path: '/quest_one', component: () => import('./pages/quest_one.vue')},
    { path: '/quest_two', component: () => import('./pages/quest_two.vue') },
    { path: '/quest_three', component: () => import('./pages/quest_three.vue') },
    { path: '/quest_four', component: () => import('./pages/quest_four.vue')},
    { path: '/quest_five', component: () => import('./pages/quest_five.vue')},
    { path: '/winner', component: () => import('./pages/winner.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('./pages/welcome.vue') }
  ],
})

createApp(App).use(router).mount('#app')
