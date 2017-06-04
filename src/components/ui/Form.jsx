import React from 'react';

import { sanitizeProps } from '../../Helpers';

import '../../styles/components/ui/_Form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      propsToClean: ['className']
    };
  }

  render() {
    let className = [
      'form',
      this.props.className || ''
    ].join(' ');
    let sanitizedProps = sanitizeProps(this.props, this.state.propsToClean);

    return(
      <form className={className} {...sanitizedProps}>{this.props.children}</form>
    );
  }
}

export default Form;
