import { createRouter, createWebHistory } from 'vue-router'
import Characters from '../presentation/views/Characters.vue'
import type { RouteRecordRaw } from 'vue-router'
import Character from '../presentation/views/Character.vue'
import NotFound from '../presentation/views/PageNotFound.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/characters', component: Characters },
  { path: '/characters/:id', component: Character },
  { path: '/', redirect: '/characters' },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
