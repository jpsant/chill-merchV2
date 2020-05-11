import React from 'react';
import './styles.scss';

import LeftWinter from '../../../../assets/svgs/left-winter.svg';
import LeftSpring from '../../../../assets/svgs/left-spring.svg';
import LeftAutumn from '../../../../assets/svgs/left-autumn.svg';
import LeftSummer from '../../../../assets/svgs/left-summer.svg';

import RightWinter from '../../../../assets/svgs/right-winter.svg';
import RightSpring from '../../../../assets/svgs/right-spring.svg';
import RightAutumn from '../../../../assets/svgs/right-autumn.svg';
import RightSummer from '../../../../assets/svgs/right-summer.svg';

export default function SectionsManager({ currentPage, changeSection, currentSection }) {
  return (
    <>
      <div className='left-button-container'>
        <button onClick={() => changeSection(-1)}
          className="left-button-container__button">
          <img className={currentPage === 1 ?
            'left-button-container__button-img left-button-in' :
            'left-button-container__button-img left-button-out'}
            src={currentSection === 0 ? LeftWinter :
              currentSection === 1 ? LeftSpring :
                currentSection === 2 ? LeftAutumn :
                  currentSection === 3 ? LeftSummer : null} alt="left button" />
        </button>
      </div>
      <div className="right-button-container">
        <button onClick={() => changeSection(+1)}
          className="right-button-container__button">
          <img className={currentPage === 1 ?
            'right-button-container__button-img right-button-in' :
            'right-button-container__button-img right-button-out'}
            src={
              currentSection === 0 ? RightWinter :
                currentSection === 1 ? RightSpring :
                  currentSection === 2 ? RightAutumn :
                    currentSection === 3 ? RightSummer : null} alt="right button" />
        </button>
      </div>
    </>
  );
}