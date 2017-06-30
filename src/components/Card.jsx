import React from 'react';

import '../styles/components/_Card.scss';

const Card = ({ hoverable, className, children, ...rest}) => {
  let classes = [
    'card',
    hoverable ? 'hoverable' : '',
    className || ''
  ].join(' ');
  return(
    <div className={classes} {...rest}>{children}</div>
  );
};

export default Card;
