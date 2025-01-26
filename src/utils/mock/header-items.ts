import {
  EAuthorizationRoutesName,
  EHomeRoutesName,
  EBusinessRoutesName,
} from '@/router/collections';

export const ACTION_ITEMS = [
  {
    text: 'SIGN IN',
    road: {
      name: EAuthorizationRoutesName.AUTHORIZATION,
    },
    id: 1,
  },
  {
    text: 'SIGN UP',
    road: {
      name: EAuthorizationRoutesName.REGISTRATION,
    },
    id: 2,
  },
];

export const SITEMAP_ITEMS = [
  {
    text: 'HOME',
    road: {
      name: EHomeRoutesName.HOME,
    },
    id: 1,
  },
  {
    text: 'QUIZ',
    road: {
      name: EBusinessRoutesName.DEFAULT,
    },
    id: 1,
  },
];

export const HOME = {
  name: EHomeRoutesName.HOME,
};
