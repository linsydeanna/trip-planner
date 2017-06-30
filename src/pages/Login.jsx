import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignInSignUp from '../components/SignInSignUp';

const redirect = (history, location, next) => {
  let dest = next ||
    (location.state && location.state.from &&location.state.from.pathname) ||
    '/trips';
  history.push(dest);
};

const Login = ({ location, history }) => {
  return (
    <SignInSignUp redirect={(next) => redirect(history, location, next)} />
  )
};

const mapStateToProps = state => ({
  user: state.user
});

export default withRouter(connect(mapStateToProps)(Login));
