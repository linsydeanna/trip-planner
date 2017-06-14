import React from 'react';

import '../../styles/components/ui/_Card.scss';

export default ({ hoverable, className, children, ...rest}) => {
  let classes = [
    'card',
    hoverable ? 'hoverable' : '',
    className || ''
  ].join(' ');
  return(
    <div className={classes} {...rest}>{children}</div>
  );
};
