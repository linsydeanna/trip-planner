import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Router>
      <Route path="/home" component={Home} />
    </Router>
  )
};

export default Routes;
