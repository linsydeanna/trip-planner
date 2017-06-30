import React from 'react';

import '../styles/components/_Button.scss';

const Button = ({ btnStyle, className, children, ...rest}) => {
  let classes = ['button', btnStyle || 'default', className || ''].join(' ');
  return (
    <button className={classes} {...rest}>{children}</button>
  );
};

export default Button;
