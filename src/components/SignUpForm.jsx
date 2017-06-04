import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './ui/Form';
import Button from './ui/Button';
import Input from './ui/Input';

import '../styles/components/_SignUpForm.scss';

const SignUpForm = ({ handleSubmit, onSubmit }) => {
  return (
    <Form className="sign-up-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="email">Email</label>
        <Field id="email" name="email" component={Input} type="text" />
        <label for="username">Username</label>
        <Field id="username" name="username" component={Input} type="text" />
        <label for="password">Password</label>
        <Field id="password" name="password" component={Input} type="text" />
        <label for="confirmPassword">Confirm Password</label>
        <Field id="confirmPassword" name="confirmPassword" component={Input} type="text" />
        <Button btnStyle="primary" type="submit">Sign Up</Button>
      </form>
    </Form>
  )
};

export default reduxForm({
  form: 'signUp'
})(SignUpForm);
