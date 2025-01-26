import {
  EHomeComponents,
  EHomeRoutesName,
  EHomeRoutesPath,
} from './routes/EHomeRoutes';

export default {
  redirect: { name: EHomeRoutesName.HOME },
  name: EHomeRoutesName.DEFAULT,
  path: EHomeRoutesPath.DEFAULT,
  meta: { requiresAuth: false },
  children: [
    {
      component: EHomeComponents.HOME,
      path: EHomeRoutesPath.HOME,
      name: EHomeRoutesName.HOME,
    },
  ],
};
