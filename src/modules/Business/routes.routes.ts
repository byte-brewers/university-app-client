import {
  EBusinessComponents,
  EBusinessRoutesPath,
  EBusinessRoutesName,
} from './routes/EBusinessRoutes';

export default {
  redirect: { name: EBusinessRoutesName.BUSINESS },
  name: EBusinessRoutesName.DEFAULT,
  path: EBusinessRoutesPath.DEFAULT,
  meta: { requiresAuth: true },
  children: [
    {
      component: EBusinessComponents.BUSINESS,
      name: EBusinessRoutesName.BUSINESS,
      path: EBusinessRoutesPath.BUSINESS,
    },
  ],
};
