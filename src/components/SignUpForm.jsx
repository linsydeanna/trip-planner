import React from 'react';
import Input from "./ui/Input";
// import { Button } from "react-bootstrap";
import { Field, reduxForm } from 'redux-form';

const SignUpForm = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="sign-up-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="email">Email</label>
        <Field id="email" name="email" component={Input} type="text" />
        <label for="username">Username</label>
        <Field id="username" name="username" component={Input} type="text" />
        <label for="password">Password</label>
        <Field id="password" name="password" component={Input} type="text" />
        <label for="confirmPassword">Confirm Password</label>
        <Field id="confirmPassword" name="confirmPassword" component={Input} type="text" />
        <button className="btn btn-primary" type="submit">Sign Up</button>
      </form>
    </div>
  )
};

export default reduxForm({
  form: 'signUp'
})(SignUpForm);
