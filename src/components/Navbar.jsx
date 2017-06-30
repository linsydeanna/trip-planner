import React from 'react';
import { Link } from 'react-router-dom';

import Button from './ui/Button';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Link to="/logout">
        <Button btnStyle="primary">Logout</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
