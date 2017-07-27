import React from 'react';

import '../styles/components/_Button.scss';

const Button = ({ btnStyle, className, loading, children, ...rest}) => {
  let classes = [
    'button',
    btnStyle || 'default',
    className || '',
    loading ? 'loading' : ''
  ].join(' ');
  return (
    <button className={classes} {...rest}>
      <div className="button-content">{children}</div>
      <div className="loading-circle"></div>
    </button>
  );
};

export default Button;
