import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './ui/Form';
import Input from './ui/Input';
import Button from './ui/Button';
import StatusCallout from './ui/StatusCallout';
import { required } from '../Validations';

import '../styles/components/_SignInForm.scss';

class SignInForm extends React.Component {

  componentWillReceiveProps(next) {
    console.log('SIGNIN FORM RECEIVE PROPS', next);
  }

  render() {
    console.log('RENDER SIGNINFORM');
    const { handleSubmit, validation, validationMessage, ...rest } = this.props;
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
        {
          !validation && <StatusCallout error message={validationMessage} />
        }
      </Form>
    );
  }

}

// const SignInForm = ({ handleSubmit, validationMessage, valid, ...rest }) => {
//   return (
//     <Form className="sign-in-form" onSubmit={handleSubmit}>
//       <Field
//         id="username"
//         name="username"
//         component={Input}
//         type="text"
//         label="Username"
//         validate={[required]}
//       />
//       <Field
//         id="password"
//         name="password"
//         component={Input}
//         type="password"
//         label="Password"
//         validate={[required]}
//       />
//       <Button btnStyle="primary" type="submit">Sign In</Button>
//       {
//         !valid && <StatusCallout error message={validationMessage} />
//       }
//     </Form>
//   );
// };

export default reduxForm({
  form: 'signIn',
  destroyOnUnmount: false
})(SignInForm);
