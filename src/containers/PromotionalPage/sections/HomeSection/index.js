import React from 'react';
import './styles.scss';

import MainLogo from '../../../../assets/svgs/main-logo.svg';
import ParticlesBackground from '../../components/ParticlesContainer';

export default function HomeSection({ language, season }) {
  return (
    <div className="homeSectionContainer">
      <img className="homeSectionContainer__logo" src={MainLogo} alt="" />
      <h2 className="homeSectionContainer__description">
        {language === 'english' ? 'The Chillest fictional merch on the World!' : 'A Marca de roupas mais tranquila do Mundo!'}
      </h2>
      <ParticlesBackground season={season} />
    </div>
  )
}