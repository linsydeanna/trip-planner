import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const getValidationState = (touched, error, warning) => {
  return !touched ? null : warning ? 'warning' : error ? 'error' : 'success';
};

const Input = props => {
  const {
    id,
    input,
    label,
    type,
    placeholder,
    meta: { touched, error, warning }
  } = props;
  return (
    <FormGroup
      bsClass="form-group input"
      controlId={id}
      validationState={getValidationState(touched, error, warning)}
    >
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        {...input}
        type={type}
        placeholder={placeholder}
      />
      {
        touched && (
          (error && <span className="error">{error}</span>) ||
          (warning && <span className="warning">{warning}</span>)
        )
      }
    </FormGroup>
  )
};

export default Input;
