import React from 'react';
import './styles.scss';

import MainLogo from '../../../../assets/svgs/main-logo.svg';
import ParticlesBackground from '../../components/ParticlesContainer';

import Languages from '../../../../multiLanguages/language';

export default function HomeSection({ language, season }) {
  return (
    <div className="homeSectionContainer">
      <img className="homeSectionContainer__logo" src={MainLogo} alt="" />
      <h2 className="homeSectionContainer__description">
        {Languages[language].homeSection.title}
      </h2>
      <ParticlesBackground season={season} />
    </div>
  )
}