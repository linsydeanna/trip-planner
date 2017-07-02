import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from './Logo';
import UserMenu from './UserMenu';

import '../styles/components/_Navbar.scss';

class Navbar extends React.Component {

  navList = [
    { name: 'Trips', path: '/trips' }
  ];

  renderNavList() {
    return this.navList.map((nav, index) => {
      let className = nav.path === this.props.match.path ?
        'link active' :
        'link';
      return <Link key={index} className={className} to="/trips">Trips</Link>;
    });
  }

  render() {
    let { user } = this.props;

    return (
      <div className="navbar">
        <Logo small />
        <nav className="nav">
          {this.renderNavList()}
        </nav>
        <UserMenu user={user} />
      </div>
    );
  }

}

export default withRouter(Navbar);
