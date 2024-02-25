import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth" component={AuthAppLazy} />
            <Route path="/" component={MarketingAppLazy} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
