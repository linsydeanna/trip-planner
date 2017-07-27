import React from 'react';

import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Logo from '../components/Logo';
import Tabs from '../components/CustomTabs';
import Card from '../components/Card';
import { logUserIn } from '../actions/users';
import { addNotification } from '../actions/notifications';
import store from '../store';

import '../styles/components/_SignInSignUp.scss';

class SignInSignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      postStatus: {
        ok: true,
        message: ''
      }
    };
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  setLoading(isLoading) {
    this.setState({ loading: isLoading });
  }

  setPostStatus({ ok = false, status, statusText, message }, cb) {
    message = message || `${status} - ${statusText}`;
    this.setState({ postStatus: { ok, message }}, cb);
  }

  resetPostStatus(cb) {
    this.setPostStatus({ ok: true, status: null, statusText: ''}, cb);
  }

  handleTabSelect(index, lastIndex, e) {
    this.resetPostStatus();
  }

  handleSignIn(data) {
    let { username, password } = data;
    this.resetPostStatus();
    this.post(false, { username, password });
  }

  handleSignUp(data) {
    let { email, username, password, confirmPassword } = data;
    this.resetPostStatus();
    this.post(true, { email, username, password, confirmPassword });
  }

  handleError(err, message) {
    console.error(err);
    store.dispatch(addNotification({
      key: 'fetch-error',
      severity: 'error',
      message: message || err.message
    }));
  }

  post(isNewAccount, payload) {
    let { username } = payload;
    let base = process.env.REACT_APP_API;
    let endpoint = isNewAccount ? '/users' : '/login';
    let config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    };

    this.setLoading(true);

    fetch(base + endpoint, config)
      .then(resp => {
        this.setLoading(false);
        this.setPostStatus(resp);
        [200, 201].indexOf(resp.status) !== -1
        ? this.handlePostSuccess(resp, username)
        : this.handlePostFailure(resp);
      })
      .catch(err => {
        this.setLoading(false);
        this.handleError(err);
      });
  }

  handlePostSuccess(resp, username) {
    resp.json()
      .then(data => {
        if (!data || !data.email || !data.token) {
          let synthResp = {
            ok: false,
            status: 200,
            statusText: 'Authentication is successful, but server response is insufficient.'
          };
          this.setPostStatus(synthResp);
          return;
        }

        let { email, token } = data;
        this.resetPostStatus();
        store.dispatch(logUserIn({ username, email, token }));
        this.props.redirect('/trips');

      })
      .catch(err => {
        this.handleError(err, 'Unable to parse server response');
      });
  }

  handlePostFailure(resp) {
    resp.json()
      .then(data => {
        data.message
        ? this.setPostStatus({ message: data.message })
        : this.setPostStatus(resp);
      })
      .catch(err => {
        this.handleError(err, 'Unable to parse server error response');
      });
  }

  render() {
    return (
      <Card className="sign-in-sign-up">
        <Logo />
        <Tabs onSelect={this.handleTabSelect}>
          <div title="Sign In">
            <SignInForm
              onSubmit={this.handleSignIn}
              postStatus={this.state.postStatus}
              loading={this.state.loading}
            />
          </div>
          <div title="Sign Up">
            <SignUpForm
              onSubmit={this.handleSignUp}
              postStatus={this.state.postStatus}
              loading={this.state.loading}
            />
          </div>
        </Tabs>
      </Card>
    );
  }

};

export default SignInSignUp;
