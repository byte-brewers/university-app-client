export const EBusinessComponents = {
  BUSINESS: () => import('../view/BusinessView.vue'),
};

export enum EBusinessRoutesPath {
  DEFAULT = '/cabinet',
  BUSINESS = '/cabinet/business',
}

export enum EBusinessRoutesName {
  DEFAULT = 'Cabinet',
  BUSINESS = 'Business',
}
