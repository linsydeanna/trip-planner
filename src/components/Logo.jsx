import React from 'react';

import CityGoImg from '../images/trip_planner.svg';
import CityGoText from '../images/citygo_text.svg';

import '../styles/components/_Logo.scss';

const Logo = ({ small }) => {
  let className = small ? 'logo small' : 'logo';
  return (
    <div className={className}>
      <img className="logo-pic" src={CityGoImg} alt="CityGo Logo" />
      {/* TODO: Change logo-text to use fonts instead. */}
      <img className="logo-text" src={CityGoText} alt="CityGo Text" />
    </div>
  )
};

export default Logo;
