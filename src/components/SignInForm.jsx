import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './Form';
import Input from './Input';
import Button from './Button';
import FormStatus from './FormStatus';
import { required } from '../modules/Validations';

import '../styles/components/_SignInForm.scss';

const handleSubmitSuccess = (result, dispatch, props) => {
  props.reset();
};

const SignInForm = ({ handleSubmit, postStatus, loading }) => {
  return (
    <Form className="sign-in-form" onSubmit={handleSubmit}>
      { !postStatus.ok && <FormStatus error message={postStatus.message} /> }
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
      <Button btnStyle="primary" type="submit" loading={loading}>Sign In</Button>
    </Form>
  );
};

export default reduxForm({
  form: 'signIn',
  destroyOnUnmount: false,
  onSubmitSuccess: handleSubmitSuccess
})(SignInForm);
