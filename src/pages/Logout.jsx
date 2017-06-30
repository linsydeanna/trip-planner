import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import store from '../store/store';
import { logUserOut } from '../actions/actions';

class Logout extends React.Component {

  componentWillMount() {
    store.dispatch(logUserOut());
    this.props.history.push('/');
  }

  render() {
    return null;
  }

}

export default withRouter(connect()(Logout));
