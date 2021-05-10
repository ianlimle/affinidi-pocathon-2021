/**
 * File containing various browser routes.
 * */

interface Routes {
  ROOT: string,
  API_KEY: string,
  ISSUER: string,
  ISSUER_LOGIN: string,
  APPLICATION: string,
  APPLICANT_LOGIN: string,
  ISSUER_VIEW_APPLICATION: string,
}

export const routes: Routes = {
  ROOT: '/',
  API_KEY: '/api-key',
  ISSUER: '/issuer',
  ISSUER_LOGIN: '/issuer/login',
  APPLICATION: '/application',
  APPLICANT_LOGIN: '/applicant/login',
  ISSUER_VIEW_APPLICATION: '/issuer/application'
}