import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './Form';
import Button from './Button';
import Input from './Input';
import FormStatus from './FormStatus';
import { required, email, shortest, longest, match } from '../modules/Validations';

import '../styles/components/_SignUpForm.scss';

const emailRules = [required, email];
const usernameRules = [required, shortest(3), longest(10)];
const passwordRules = [required, shortest(4), longest(10)];
const confirmPasswordRules = [match('password')];

const handleSubmitSuccess = (result, dispatch, props) => {
  props.reset();
};

const SignUpForm = ({ handleSubmit, postStatus }) => {
  return (
    <Form className="sign-up-form" onSubmit={handleSubmit}>
      { !postStatus.ok && <FormStatus error message={postStatus.message} /> }
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
  destroyOnUnmount: false,
  onSubmitSuccess: handleSubmitSuccess
})(SignUpForm);
