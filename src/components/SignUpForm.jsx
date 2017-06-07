import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './ui/Form';
import Button from './ui/Button';
import Input from './ui/Input';
import { required, email, shortest, longest, match } from '../Validations';

import '../styles/components/_SignUpForm.scss';

const emailRules = [required, email];
const usernameRules = [required, shortest(3), longest(10)];
const passwordRules = [required, shortest(4), longest(10)];
const confirmPasswordRules = [match('password')];

const SignUpForm = props => {
  const { handleSubmit } = props;
  return (
    <Form className="sign-up-form" onSubmit={handleSubmit}>
      <Field
        id="email"
        name="email"
        component={Input}
        type="email"
        label="Email"
        validate={emailRules}
        />
      <Field
        id="username"
        name="username"
        component={Input}
        type="text"
        label="Username"
        validate={usernameRules}
      />
      <Field
        id="password"
        name="password"
        component={Input}
        type="password"
        label="Password"
        validate={passwordRules}
      />
      <Field
        id="confirm-password"
        name="confirmPassword"
        component={Input}
        type="password"
        label="Confirm Password"
        validate={confirmPasswordRules}
      />
      <Button btnStyle="primary" type="submit">Sign Up</Button>
    </Form>
  )
};

export default reduxForm({
  form: 'signUp',
  destroyOnUnmount: false
})(SignUpForm);
