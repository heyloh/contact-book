import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignInUp from './pages/SignInUp';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/SignInUp" component={SignInUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
