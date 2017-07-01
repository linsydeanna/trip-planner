import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import UserMenu from './UserMenu';

import '../styles/components/_Navbar.scss';

class Navbar extends React.Component {

  render() {
    let { user } = this.props;
    return (
      <div className="navbar">
        <Logo small />
        <nav className="nav">
          <Link to="/trips">Trips</Link>
        </nav>
        <UserMenu user={user} />
      </div>
    );
  }

}

export default Navbar;
