import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from "../pages/Home";
import Test from "../pages/Test";

import '../styles/app.scss';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Test} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  )
};

export default Routes;
