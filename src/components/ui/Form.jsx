import React from 'react';

import '../../styles/components/ui/_Form.scss';

export default ({className, children, ...rest}) => {
  let classes = ['form', className || ''].join(' ');
  return(
    <form className={classes} {...rest}>{children}</form>
  );
};
