import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './ui/Form';
import Button from './ui/Button';
import Input from './ui/Input';

import '../styles/components/_SignUpForm.scss';

const SignUpForm = (props) => {
  console.warn(props);
  return (
    <Form className="sign-up-form" onSubmit={props.handleSubmit(props.onSubmit)}>
      <label htmlFor="email">Email</label>
      <Field id="email" name="email" component={Input} type="email" />
      <label htmlFor="username">Username</label>
      <Field id="username" name="username" component={Input} type="text" />
      <label htmlFor="password">Password</label>
      <Field id="password" name="password" component={Input} type="password" />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <Field id="confirmPassword" name="confirmPassword" component={Input} type="password" />
      <Button btnStyle="primary" type="submit">Sign Up</Button>
    </Form>
  )
};

export default reduxForm({
  form: 'signUp',
  fields: ['email', 'username', 'password', 'confirmPassword']
})(SignUpForm);
