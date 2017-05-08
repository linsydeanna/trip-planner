import React from 'react';
import Input from "./ui/Input";
import { Button } from "react-bootstrap";
import { Field, reduxForm } from 'redux-form';

const CardForm = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="trip-info">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="cardType" component={Input} type="text" placeholder="Card Type"/>
        <Field name="name" component={Input} type="text" placeholder="Name"/>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
};

export default reduxForm({
  form: 'card'
})(CardForm);
