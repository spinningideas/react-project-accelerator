import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadingIndicator from 'components/Shared/LoadingIndicator';

const LazyLoadedPage = (pageName) => {
  return lazy(() => import(`./pages/${pageName}`));
};

const routes = (
  <Suspense fallback={<LoadingIndicator />}>
    <Switch>
      <Route path="/" exact component={LazyLoadedPage('Home')} />
      <Route path="/about" component={LazyLoadedPage('About')} />
      <Route path="/contact/:name" component={LazyLoadedPage('Contact')} />
      <Route path="/contact" component={LazyLoadedPage('Contact')} />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default routes;
