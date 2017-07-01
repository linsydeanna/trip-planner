import React from 'react';
import { Link } from 'react-router-dom';
import { MdExpandMore } from 'react-icons/lib/md';

import Logo from './Logo';

import '../styles/components/_Navbar.scss';

const Navbar = props => {
  let { user } = props;
  return (
    <div className="navbar">
      <Logo small />
      <nav className="nav">
        <Link to="/trips">Trips</Link>
      </nav>
      <div className="user-menu">
        { user.username }
        <MdExpandMore className="icon-expand-more"/>
        <div className="user-menu-context">
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
