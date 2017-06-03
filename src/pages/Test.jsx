import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import SignInSignUp from '../components/SignInSignUp';


const Test = props => (
  <SignInSignUp />
);

const mapStateToProps = state => ({
  // user: state.user,
  // cards: state.cards
});

export default withRouter(connect(mapStateToProps)(Test));
