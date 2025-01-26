import AuthorizationRoutes from '../modules/Authorization/routes.routes';
import BusinessRoutes from '../modules/Business/routes.routes';
import HomeRoutes from '../modules/Home/routes.routes';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [AuthorizationRoutes, BusinessRoutes, HomeRoutes],
});

export default router;
