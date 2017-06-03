import React from 'react';
import Input from "./ui/Input";
// import { Button } from "react-bootstrap";
import { Field, reduxForm } from 'redux-form';

const SignInForm = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <Field id="username" name="username" component={Input} type="text" />
        <label htmlFor="password">Password</label>
        <Field id="password" name="password" component={Input} type="text" />
        <button className="btn btn-primary" type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'signIn'
})(SignInForm);
