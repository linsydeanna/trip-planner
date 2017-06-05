import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './ui/Form';
import Input from './ui/Input';
import Button from './ui/Button';

import '../styles/components/_SignInForm.scss';

const SignInForm = ({ handleSubmit, onSubmit }) => {
  return (
    <Form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username</label>
      <Field id="username" name="username" component={Input} type="text" />
      <label htmlFor="password">Password</label>
      <Field id="password" name="password" component={Input} type="password" />
      <Button btnStyle="primary" type="submit">Sign In</Button>
    </Form>
  );
};

export default reduxForm({
  form: 'signIn'
})(SignInForm);
