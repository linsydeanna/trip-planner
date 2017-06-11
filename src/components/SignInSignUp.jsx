import React from 'react';

import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Logo from '../components/ui/Logo';
import { Tabs, Tab } from '../components/ui/Tabs';
import Card from '../components/ui/Card';

import '../styles/components/_SignInSignUp.scss';

const handleSignIn = (data) => {
  console.log('SIGN IN', data);
}
const handleSignUp = (data) => {
  console.log('SIGN UP', data);
}

const SignInSignUp = () => {
  return (
    <Card className="sign-in-sign-up">
      <Logo />
      <Tabs selectedIndex="0">
        <Tab title="Sign In">
          <SignInForm onSubmit={data => handleSignIn(data)} />
        </Tab>
        <Tab title="Sign Up">
          <SignUpForm onSubmit={data => handleSignUp(data)} />
        </Tab>
      </Tabs>
    </Card>
  )};

export default SignInSignUp;
