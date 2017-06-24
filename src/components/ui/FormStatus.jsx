import React from 'react';

const FormStatus = ({ success, error, warning, message }) => {
  let statusClass = error ? 'error' : warning ? 'warning' : success ? 'success' : 'default';
  return (
    <p className={`form-status ${statusClass}`}>{message}</p>
  );
};

export default FormStatus;
