import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import NoMatch from './components/NoMatch';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Trips from './pages/Trips';
import Notifications from './pages/Notifications';

import packageJson from '../package.json';

const Routes = () => {
  console.log(packageJson);
  return (
    <Router>
      <div>
        <Notifications />
        <Switch>
          <Redirect exact from="/" to="/trips" />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <PrivateRoute path="/trips" component={Trips} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
