import React, { useEffect } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import PrivateRoute from 'helpers/PrivateRoute';
import { getAuth } from './helpers';

// Components
import Login from './components/Login/Login';
import AdminLayout from './layouts/Admin';

const App = () => {
  useEffect(() => {
    /**
     * Check the authentication for the user
     */

    // eslint-disable-next-line no-unused-vars
    const auth = getAuth();

    console.log(auth);

    return () => {
      // TODO:
    };
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/login" render={() => <Login />} />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
