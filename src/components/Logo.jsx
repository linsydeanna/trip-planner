import React from 'react';
import LogoPic from '../images/trip_planner.svg';
import LogoText from '../images/citygo_text.svg';

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-pic" src={LogoPic} alt="CityGo Logo" />
      {/* TODO: Change logo-text to use fonts instead. */}
      <img className="logo-text" src={LogoText} alt="CityGo Text" />
    </div>
  )
};

export default Logo;
