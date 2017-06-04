import React from 'react';

import { sanitizeProps } from '../../Helpers';

import '../../styles/components/ui/_Card.scss';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      propsToClean: ['className', 'hoverable']
    };
  }

  render() {
    let className = [
      'card',
      this.props.hoverable ? 'hoverable' : '',
      this.props.className || ''
    ].join(' ');
    let sanitizedProps = sanitizeProps(this.props, this.state.propsToClean);

    return(
      <div className={className} {...sanitizedProps}>{this.props.children}</div>
    );
  }
}

export default Card;
