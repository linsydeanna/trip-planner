import React from 'react';
import { FormGroup } from 'react-bootstrap';

const renderInput = ({
  input: { ...input },
  placeholder,
  type,
  meta: { touched, error },
}) => {
  return (
    <div className="">
      <FormGroup>
        <input
          className="form-control"
          {...input}
          type={type}
          placeholder={placeholder}
        />
        {touched &&
         error &&
         <span className="error">{error}</span>}
      </FormGroup>
    </div>
  )
};

export default renderInput;
