import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import Home from '../pages/Home';
import Test from '../pages/Test';
import Notifications from '../pages/Notifications';

import '../styles/app.scss';

const Routes = () => {
  return (
    <Router>
      <div>
        <Notifications />
        <PrivateRoute path="/" component={Home} />
        <Route path="/login" component={Test} />
      </div>
    </Router>
  )
};

export default Routes;
