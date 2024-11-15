import AuthorizationRoutes from '../modules/Authorization/routes.routes'
import HomeRoutes from '../modules/Home/routes.routes'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [AuthorizationRoutes, HomeRoutes],
})

export default router
