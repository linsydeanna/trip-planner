import React from 'react';

import '../../styles/components/ui/_Button.scss';

export default ({ btnStyle, className, children, ...rest}) => {
  let classes = ['button', btnStyle || 'default', className || ''].join(' ');
  return (
    <button className={classes} {...rest}>{children}</button>
  );
};
