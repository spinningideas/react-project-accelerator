import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingIndicator from 'components/LoadingIndicator';

const routes = (
  <Switch>
    <Route path="/" exact component={Loadable({ loader: () => import('./pages/Home'), loading: LoadingIndicator })} />
    <Route path="/about" component={Loadable({ loader: () => import('./pages/About'), loading: LoadingIndicator })} />
    <Route
      path="/contact"
      component={Loadable({ loader: () => import('./pages/Contact'), loading: LoadingIndicator })}
    />
    <Redirect to="/" />
  </Switch>
);

export default routes;
