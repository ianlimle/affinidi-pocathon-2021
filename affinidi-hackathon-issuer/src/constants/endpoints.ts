/**
 * File containing various API endpoints.
 * */

interface Endpoints {
  SIGNUP: string,
  LOGIN: string,
  LOGOUT: string,
  WALLET_CREDENTIALS: string,
  WALLET_SIGN_CREDENTIALS: string,
  VC_BUILD_UNSIGNED: string,
  DID_RESOLVE_DID: string,
}

export const endpoints: Endpoints = {
  SIGNUP: '/users/signup',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  WALLET_CREDENTIALS: '/wallet/credentials',
  VC_BUILD_UNSIGNED: '/vc/build-unsigned',
  WALLET_SIGN_CREDENTIALS: '/wallet/sign-credential',
  DID_RESOLVE_DID: '/did/resolve-did',
}
