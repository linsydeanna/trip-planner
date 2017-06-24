import React from 'react';

import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Logo from '../components/ui/Logo';
import Tabs from '../components/ui/CustomTabs';
import Card from '../components/ui/Card';
import { logUserIn, addNotification } from '../actions/actions';
import store from '../store/store';

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
  }

  handleSignIn(data) {
    fetch('//localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password
      })
    }).then(resp => {
      console.log(resp, resp.body.getReader().read());
      if (!resp.ok) {
        this.setPostStatus(resp);
        return;
      }
      this.setPostStatus(resp, () => {
        this.logUserIn(data.username, resp.body.id, data.email, resp.body.token);
      });
    }).catch(error => {
      console.error(error);
      store.dispatch(addNotification({
        key: 'sign-in-error',
        severity: 'error',
        message: 'An unexpected error has occured. If you have connection, it is most likely a script error.',
        ttl: 7500
      }));
    });
  }

  handleSignUp(data) {
    fetch('//localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        username: data.username,
        password: data.password,
        confirmPassword: data.confirmPassword
      })
    }).then(resp => {
      if (!resp.ok) {
        this.setPostStatus(false, resp.statusText);
        return;
      }
      this.setPostStatus(true, 'success');
      this.logUserIn(data.username, resp.body.id, data.email, resp.body.token);
    }).catch(error => {
      this.setPostStatus(false, error);
      return;
    });
  }

  logUserIn(username, id, email, token) {
    store.dispatch(logUserIn({ username, id, email, token }));
  }

  setPostStatus({ ok, status, statusText }, cb) {
    let message = `${status} - ${statusText}`;
    this.setState({ postStatus: { ok, message }}, cb);
  }

  render() {
    return (
      <Card className="sign-in-sign-up">
        <Logo />
        <Tabs>
          <div title="Sign In">
            <SignInForm
              onSubmit={data => this.handleSignIn(data)}
              postStatus={this.state.postStatus}
            />
          </div>
          <div title="Sign Up">
            <SignUpForm onSubmit={data => this.handleSignUp(data)} customValidation={this.state.post} />
          </div>
        </Tabs>
      </Card>
    );
  }

};

export default SignInSignUp;
