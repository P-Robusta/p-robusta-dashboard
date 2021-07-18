/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import PrivateRoute from 'helpers/PrivateRoute';
import NotFound from 'components/Page/NotFound';
import { getAuth } from './helpers';
// Components
import Login from './components/Login/Login';
import Admin from './layouts/Admin';
import NotAuth from './components/Page/NotAuth';

const App = () => {
  const token = sessionStorage.getItem('__token__');
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={() => (token ? <Admin /> : <NotAuth />)} />
        <Route path="/login" render={() => <Login />} exact />
        <Route path="/404" render={() => <NotFound />} />
        <Route path="/" render={() => (token ? <Redirect to="/admin" /> : <Login />)} exact />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
