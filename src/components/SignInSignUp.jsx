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
      postStatus: {
        ok: true,
        message: ''
      }
    };
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  setPostStatus({ ok, status, statusText }, cb) {
    let message = `${status} - ${statusText}`;
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

    fetch(base + endpoint, config)
      .then(resp => {
        this.setPostStatus(resp);
        return resp.status === 200 || resp.status === 201 ?
          resp.json().catch(err => {
            this.handleError(err, 'Unable to parse server response');
          }) :
          undefined;
      })
      .then(parsedData => {
        console.log(parsedData);
        if (!parsedData || !parsedData.email || !parsedData.token) {
          let synthResp = {
            ok: false,
            status: 200,
            statusText: 'Authentication is successful, but server response is insufficient.'
          };
          this.setPostStatus(synthResp);
          return;
        }
        let { email, token } = parsedData;
        this.resetPostStatus();
        store.dispatch(logUserIn({ username, email, token }));
        this.props.redirect('/trips');
      })
      .catch(err => {
        this.handleError(err);
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
            />
          </div>
          <div title="Sign Up">
            <SignUpForm
              onSubmit={this.handleSignUp}
              postStatus={this.state.postStatus} />
          </div>
        </Tabs>
      </Card>
    );
  }

};

export default SignInSignUp;
