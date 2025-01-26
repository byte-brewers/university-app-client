export const EAuthorizationComponents = {
  AUTHORIZATION: () => import('../view/AuthorizationView.vue'),
  REGISTRATION: () => import('../view/RegistrationView.vue'),
};

export enum EAuthorizationRoutesPath {
  DEFAULT = '/authrorization',
  AUTHORIZATION = '/authrorization/sign-in',
  REGISTRATION = '/authrorization/sign-up',
}

export enum EAuthorizationRoutesName {
  DEFAULT = 'Authrorization',
  AUTHORIZATION = 'SignIn',
  REGISTRATION = 'SignUp',
}
