import React from 'react';

import { sanitizeProps } from '../../Helpers';

import '../../styles/components/ui/_Button.scss';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      propsToClean: ['btnStyle', 'className']
    };
  }

  render() {
    let className = [
      'button',
      this.props.btnStyle || 'default',
      this.props.className || ''
    ].join(' ');
    let sanitizedProps = sanitizeProps(this.props, this.state.propsToClean);

    return(
      <button className={className} {...sanitizedProps}>{this.props.children}</button>
    );
  }
}

export default Button;
