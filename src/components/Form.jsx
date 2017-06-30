import React from 'react';

import '../styles/components/_Form.scss';

const Form = ({className, children, ...rest}) => {
  let classes = ['form', className || ''].join(' ');
  return(
    <form className={classes} {...rest}>{children}</form>
  );
};

export default Form;
