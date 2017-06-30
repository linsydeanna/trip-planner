import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Logo small />
      <nav className="nav">
        <Link to="/logout">Logout</Link>
      </nav>
    </div>
  );
};

export default Navbar;
