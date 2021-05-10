import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {routes} from 'constants/routes';
import NotFoundPage from 'pages/not-found/NotFound';
import IssuerLoginPage from 'pages/user/Issuer/IssuerLogin';
import ApplicantLoginPage from 'pages/user/Applicant/Applicant';
import ApplicationPage from 'pages/application/Application';
import ApiKeyPage from 'pages/api-key/ApiKey';
import Issuer from 'pages/issuer/Issuer';
import IntroPage from 'pages/intro/Intro';
// import ApplicationInfoPage from 'pages/issuer/ApplicationInfo';
import ApplicationInfoPage from 'pages/issuer/ApplicationInfoPage'

interface Props {
  isUserAuthenticated: boolean
}

/**
 * Stateless component responsible for rendering public or private routes.
 * If user is authenticated, render private routes, otherwise render public routes.
 * Small note - there is a "/intro" route (not present in any navigation), which shows a simple textual and graphical overview
 * of what SSI is.
 * */
const Router = ({isUserAuthenticated}: Props) => {
  // render public routes
  if( !isUserAuthenticated ) {
    return (
      <Switch>
        <Route exact path={routes.APPLICANT_LOGIN} component={ApplicantLoginPage} />
        <Route exact path={routes.ISSUER_LOGIN} component={IssuerLoginPage} />
        <Route exact path={routes.API_KEY} component={ApiKeyPage} />
        <Route component={IntroPage} />
      </Switch>
    )
  }

  // render private routes
  return (
    <Switch>
      <Route exact path={routes.ISSUER} component={Issuer} />
      <Route exact path={routes.APPLICATION} component={ApplicationPage} />
      <Route exact path={routes.ISSUER_VIEW_APPLICATION} component={ApplicationInfoPage} />
      <Route component={NotFoundPage}/>
    </Switch>
  )
}

export default Router;
