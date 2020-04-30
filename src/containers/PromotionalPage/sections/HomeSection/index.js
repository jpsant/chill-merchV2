import React from 'react';
import './styles.scss';

import MainLogo from '../../../../assets/svgs/main-logo.svg';

export default function HomeSection() {
  return (
    <div className="homeSectionContainer">
      <img className="homeSectionContainer__logo" src={MainLogo} alt="" />
      <h2 className="homeSectionContainer__description">The Chillest fictional merch on the World!</h2>
    </div>
  )
}