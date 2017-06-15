import React from 'react';

import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Logo from '../components/ui/Logo';
import { Tabs, Tab } from '../components/ui/Tabs';
import Card from '../components/ui/Card';
import { addCard, addUser } from '../actions/actions';
import store from '../store/store';

import '../styles/components/_SignInSignUp.scss';

class SignInSignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {
        ok: true,
        message: ''
      }
    };
  }


  handleSignIn(data) {
    console.log('SIGN IN', data);
  }

  handleSignUp(data) {
    fetch('//localhost:8000/trip-planner/users', {
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
        console.log('FETCH ERROR', resp.status, resp.statusText);
        this.setState({ post: { ok: false, message: resp.statusText }});
        return;
      }
      console.log('FETCH SUCCESS', resp);
      this.setState({ post: { ok: true, message: 'success' }});
      return;
    });
  }

  render() {
    return (
      <Card className="sign-in-sign-up">
        <Logo />
        <Tabs selectedIndex={0}>
          <Tab title="Sign In">
            <SignInForm onSubmit={data => this.handleSignIn(data)} />
          </Tab>
          <Tab title="Sign Up">
            <SignUpForm onSubmit={data => this.handleSignUp(data)} />
          </Tab>
        </Tabs>
      </Card>
    );
  }

};

export default SignInSignUp;
