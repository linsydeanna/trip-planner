import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './ui/Form';
import Input from './ui/Input';
import Button from './ui/Button';
import { required } from '../Validations';

import '../styles/components/_SignInForm.scss';

const SignInForm = props => {
  const { handleSubmit } = props;
  return (
    <Form className="sign-in-form" onSubmit={handleSubmit}>
      <Field
        id="username"
        name="username"
        component={Input}
        type="text"
        label="Username"
        validate={[required]}
      />
      <Field
        id="password"
        name="password"
        component={Input}
        type="password"
        label="Password"
        validate={[required]}
      />
      <Button btnStyle="primary" type="submit">Sign In</Button>
    </Form>
  );
};

export default reduxForm({
  form: 'signIn',
  destroyOnUnmount: false
})(SignInForm);
