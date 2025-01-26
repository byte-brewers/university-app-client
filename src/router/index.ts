import AuthorizationRoutes from '../modules/Authorization/routes.routes';
import BusinessRoutes from '../modules/Business/routes.routes';
import HomeRoutes from '../modules/Home/routes.routes';

import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [AuthorizationRoutes, BusinessRoutes, HomeRoutes],
});

export default router;
