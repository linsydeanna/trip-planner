import React from 'react';

import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Logo from '../components/ui/Logo';
import Tabs from '../components/ui/CustomTabs';
import Card from '../components/ui/Card';
import StatusCallout from '../components/ui/StatusCallout';
import { logUserIn } from '../actions/actions';
import store from '../store/store';

import '../styles/components/_SignInSignUp.scss';

class SignInSignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ok: true,
      message: ''
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
      if (resp.ok) {
        this.setPostStatus(true, 'success', () => {
          this.logUserIn(data.username, resp.body.id, data.email, resp.body.token);
        });
      } else {
        this.setPostStatus(false, resp.statusText);
      }
    }).catch(error => {
      this.setPostStatus(false, error);
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

  setPostStatus(ok, message, cb) {
    this.setState({ ok, message }, cb);
  }

  render() {
    return (
      <Card className="sign-in-sign-up">
        <Logo />
        <Tabs>
          <div title="Sign In">
            <SignInForm
              onSubmit={data => this.handleSignIn(data)}
              validation={this.state.ok}
              validationMessage={this.state.message} />
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
