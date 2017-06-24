import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './ui/Form';
import Input from './ui/Input';
import Button from './ui/Button';
import FormStatus from './ui/FormStatus';
import { required } from '../Validations';

import '../styles/components/_SignInForm.scss';

class SignInForm extends React.Component {

  render() {
    const { handleSubmit, postStatus } = this.props;
    return (
      <Form className="sign-in-form" onSubmit={handleSubmit}>
        {
          !postStatus.ok && <FormStatus error message={postStatus.message} />
        }
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
  }

}

export default reduxForm({
  form: 'signIn',
  destroyOnUnmount: false
})(SignInForm);
