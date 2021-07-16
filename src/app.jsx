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

const App = () => {
  let isLogin = false;
  useEffect(() => {
    /**
     * Check the authentication for the user
     */
    const auth = getAuth();
    console.log(auth);
    if (auth.state) {
      isLogin = true;
      console.log(isLogin);
    }
  }, []);
  /* <Route path="/admin" render={isLogin ? (props) => <AdminLayout {...props} /> : <Redirect to="/login" />} /> */
  return (
    <BrowserRouter>
      <Switch>
        {/* <PrivateRoute path="/admin" component={Admin} /> */}
        <Route path="/admin" render={() => <Admin />} />
        {/* <Route path="/admin" render={() => (isLogin ? <Redirect to="/admin" /> : <Redirect to="/login" />)} /> */}
        <Route path="/login" render={() => <Login />} exact />
        <Route path="/404" render={() => <NotFound />} />
        <Route path="/" render={() => (isLogin ? <Redirect to="/admin" /> : <Redirect to="/login" />)} />
        <Route render={() => <NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
