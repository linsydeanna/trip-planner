import React from 'react';

import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Logo from '../components/ui/Logo';
import { Tabs, Tab } from '../components/ui/Tabs';
import Card from '../components/ui/Card';

import '../styles/components/_SignInSignUp.scss';

class SignInSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignIn(data) {
    console.log('SIGN IN');
  }

  handleSignUp(data) {
    console.log('SIGN UP');
  }

  render() {
    return (
      <Card className="sign-in-sign-up">
        <Logo />
        <Tabs selectedIndex="0">
          <Tab title="Sign In">
            <SignInForm onSubmit={this.handleSignIn} />
          </Tab>
          <Tab title="Sign Up">
            <SignUpForm onSubmit={this.handleSignUp} />
          </Tab>
        </Tabs>
      </Card>
    );
  }
}

export default SignInSignUp;
