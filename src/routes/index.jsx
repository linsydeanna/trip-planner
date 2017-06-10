import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Auth from '../Auth';
import Home from '../pages/Home';
import Test from '../pages/Test';

import '../styles/app.scss';

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    Auth.isAuthenticated ?
      <Component {...props} /> :
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
);

const Routes = () => {
  return (
    <Router>
      <div>
        <PrivateRoute path="/" component={Home} />
        <Route path="/login" component={Test} />
      </div>
    </Router>
  )
};

export default Routes;
