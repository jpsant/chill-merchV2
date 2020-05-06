import React from 'react';
import './styles.scss';

import MainLogo from '../../../../assets/svgs/main-logo.svg';

export default function HomeSection({ season, language }) {
  return (
    <div className="homeSectionContainer"
      style={{
        background: season === 0 ? "#6291AF" :
          season === 1 ? "#D46B7A" :
            season === 2 ? "#EA8C5C" :
              season === 3 ? "#E9C02E" : "#6291AF"
      }}>
      <img className="homeSectionContainer__logo" src={MainLogo} alt="" />
      <h2 className="homeSectionContainer__description">
        {language === 'english' ? 'The Chillest fictional merch on the World!' : 'A Marca de roupas mais tranquila do Mundo!'}
      </h2>
    </div>
  )
}