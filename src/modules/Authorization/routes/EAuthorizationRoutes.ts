export const EAuthorizationComponents = {
  AUTHORIZATION: () => import('../view/AuthorizationView.vue'),
  REGISTRATION: () => import('../view/RegistrationView.vue'),
}

export enum EAuthorizationRoutesPath {
  DEFAULT = '/',
  AUTHORIZATION = '/authrorization/sign-in',
  REGISTRATION = '/authrorization/sign-up',
}

export enum EAuthorizationRoutesName {
  DEFAULT = 'Index',
  AUTHORIZATION = 'Authrorization',
  REGISTRATION = 'Registration',
}
