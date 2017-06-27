import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import NoMatch from '../components/NoMatch';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Trips from '../pages/Trips';
import Notifications from '../pages/Notifications';

import '../styles/app.scss';

const Routes = () => {
  return (
    <Router>
      <div>
        <Notifications />
        <Switch>
          <Redirect exact from="/" to="/trips" />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/trips" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
};

export default Routes;
