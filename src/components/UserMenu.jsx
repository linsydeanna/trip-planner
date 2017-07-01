import React from 'react';
import { MdExpandMore } from 'react-icons/lib/md';
import { Link } from 'react-router-dom';

import '../styles/components/_UserMenu.scss';

class UserMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    let { user } = this.props;
    let userMenuContextClassName = this.state.clicked ?
      'user-menu-context opened' :
      'user-menu-context';
    let iconExpandMoreClassName = this.state.clicked ?
      'icon-expand-more opened' :
      'icon-expand-more';
    return (
      <div className="user-menu" onClick={this.handleClick}>
        { user.username }
        <div className={iconExpandMoreClassName}>
          <MdExpandMore />
        </div>
        <div className={userMenuContextClassName}>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    );
  }

}

export default UserMenu;
