import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from './Logo';
import UserMenu from './UserMenu';

import '../styles/components/_Navbar.scss';

const navList = [
  { name: 'Trips', path: '/trips' }
];

const renderNavList = (navList, currentPath) => {
  console.log('renderNavList', navList, currentPath);
  return navList.map((nav, index) => {
    let className = nav.path === currentPath ?
      'link active' :
      'link';
    return (
      <Link key={index} className={className} to={nav.path}>{nav.name}</Link>
    );
  });
}

const Navbar = ({ user, match }) => {
  return (
    <div className="navbar">
      <Logo small />
      <nav className="nav">
        {renderNavList(navList, match.path)}
      </nav>
      <UserMenu user={user} />
    </div>
  );
}

export default withRouter(Navbar);
