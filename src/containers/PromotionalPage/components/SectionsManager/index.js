import React from 'react';
import './styles.scss';

import LeftBG from '../../../../assets/svgs/bottom-left-bg.svg'
import RightBG from '../../../../assets/svgs/bottom-right-bg.svg'

import LeftButton from '../../../../assets/svgs/left-button.svg'
import RightButton from '../../../../assets/svgs/right-button.svg'

export default function SectionsManager({ currentPage }) {
  return (
    <>
      <div className="left-button-container" style={{
        opacity: currentPage === 1 ? '1' : '0',
        visibility: currentPage === 1 ? 'visible' : 'hidden'
      }}>
        <img src={LeftBG} alt="bottom left button background" />
        <button className="left-button-container__button">
          <img src={LeftButton} alt="left button" />
        </button>
      </div>
      <div className="right-button-container" style={{
        opacity: currentPage === 1 ? '1' : '0',
        visibility: currentPage === 1 ? 'visible' : 'hidden'
      }}>
        <img src={RightBG} alt="bottom right button background" />
        <button className="right-button-container__button">
          <img src={RightButton} alt="right button" />
        </button>
      </div>
    </>
  );
}