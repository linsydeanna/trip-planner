import React from 'react';

import CityGoImg from '../../images/trip_planner.svg';
import CityGoText from '../../images/citygo_text.svg';

import '../../styles/components/ui/_Logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-pic" src={CityGoImg} alt="CityGo Logo" />
      {/* TODO: Change logo-text to use fonts instead. */}
      <img className="logo-text" src={CityGoText} alt="CityGo Text" />
    </div>
  )
};

export default Logo;
