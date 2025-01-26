import {
  EAuthorizationComponents,
  EAuthorizationRoutesName,
  EAuthorizationRoutesPath,
} from './routes/EAuthorizationRoutes';

export default {
  redirect: { name: EAuthorizationRoutesName.AUTHORIZATION },
  name: EAuthorizationRoutesName.DEFAULT,
  path: EAuthorizationRoutesPath.DEFAULT,
  meta: { requiresAuth: false },
  children: [
    {
      component: EAuthorizationComponents.AUTHORIZATION,
      name: EAuthorizationRoutesName.AUTHORIZATION,
      path: EAuthorizationRoutesPath.AUTHORIZATION,
    },
    {
      component: EAuthorizationComponents.REGISTRATION,
      name: EAuthorizationRoutesName.REGISTRATION,
      path: EAuthorizationRoutesPath.REGISTRATION,
    },
  ],
};
