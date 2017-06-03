import React from 'react';
import Logo from '../components/Logo';
import { Tabs, Tab } from '../components/Tabs';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

class SignInSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(data) {
    console.log('SIGN IN');
  }

  handleSignUp(data) {
    console.log('SIGN UP');
  }

  render() {
    return (
      <div className="sign-in-sign-up">
        <div className="card">
          <Logo />
          <Tabs selectedIndex="0">
            <Tab title="Sign In">
              <SignInForm onSubmit={this.handleSignIn} />
            </Tab>
            <Tab title="Sign Up">
              <SignUpForm onSubmit={this.handleSignUp} />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default SignInSignUp;
