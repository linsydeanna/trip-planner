import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './ui/Form';
import Button from './ui/Button';
import Input from './ui/Input';
import { required, email, minLength, maxLength } from '../Validations';

import '../styles/components/_SignUpForm.scss';

const usernameLength = minLength(3) || maxLength(10);
const passwordLength = minLength(4) || maxLength(10);

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
        validate={[required, email]}
        />
      <Field
        id="username"
        name="username"
        component={Input}
        type="text"
        label="Username"
        validate={[required, usernameLength]}
      />
      <Field
        id="password"
        name="password"
        component={Input}
        type="password"
        label="Password"
        validate={[required, passwordLength]}
      />
      <Field
        id="confirm-password"
        name="confirmPassword"
        component={Input}
        type="password"
        label="Confirm Password"
        validate={[required, passwordLength]}
      />
      <Button btnStyle="primary" type="submit">Sign Up</Button>
    </Form>
  )
};

export default reduxForm({
  form: 'signUp',
  destroyOnUnmount: false
})(SignUpForm);
