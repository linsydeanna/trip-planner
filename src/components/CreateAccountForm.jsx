import React from 'react';
import Input from "./ui/Input";
import { Button } from "react-bootstrap";
import { Field, reduxForm } from 'redux-form';

const CreateAccountForm = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="create-account-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="email" component={Input} type="text" placeholder="Email"/>
        <Field name="username" component={Input} type="text" placeholder="Username"/>
        <Field name="password" component={Input} type="text" placeholder="Password"/>
        <Field name="confirmPassword" component={Input} type="text" placeholder="Confirm Password"/>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
};

export default reduxForm({
  form: 'user'
})(CreateAccountForm);
