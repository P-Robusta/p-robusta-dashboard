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
import AdminLayout from './layouts/Admin';

let isLogin;
const App = () => {
  useEffect(() => {
    /**
     * Check the authentication for the user
     */
    const auth = getAuth();
    if (auth.state) {
      isLogin = true;
    }
  }, []);
  /* <Route path="/admin" render={isLogin ? (props) => <AdminLayout {...props} /> : <Redirect to="/login" />} /> */
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/admin" component={AdminLayout} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/404" render={() => <NotFound />} />
        <Route path="/">
          {isLogin === true ? <Redirect to="/admin/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
