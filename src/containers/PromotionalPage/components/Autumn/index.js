import React from 'react';
import './styles.scss';

import AutumnImage1 from '../../../../assets/images/autumn-1.png';
import AutumnImage2 from '../../../../assets/images/autumn-2.png';

import AutumnLeaf from '../../../../assets/svgs/autumn-leaf.svg';

export default function Autumn({ language, currentPage, currentSection }) {
  return (
    <div className="autumn">
      <div className="autumn-titleContainer">
        <div className="autumn-titleContainer-text">
          <h1 className={currentPage === 1 && currentSection === 2 ?
            'autumn-titleContainer-text-h1 logo-text-1-in' :
            'autumn-titleContainer-text-h1 logo-text-out'}>
            {language === 'english' ? 'Autumn' : 'Outono'}
          </h1>
          <h2 className={currentPage === 1 && currentSection === 2 ?
            'autumn-titleContainer-text-h2 logo-text-2-in' :
            'autumn-titleContainer-text-h2 logo-text-out'}>
            {language === 'english' ? 'The Season to fall in Love.' : 'A Estação para cair de amores.'}
          </h2>
        </div>
        <img className={currentPage === 1 && currentSection === 2 ?
          'autumn-titleContainer-autumn-leaf logo-in' :
          'autumn-titleContainer-autumn-leaf logo-out'} src={AutumnLeaf} alt="Autumn Leaf" />
      </div>
      <div className="autumn-imageContainer">
        <img className={currentPage === 1 && currentSection === 2 ?
          'autumn-imageContainer__image1 autumn-image-1-in' :
          'autumn-imageContainer__image1 autumn-image-1-out'} src={AutumnImage1} alt="autumn 1" />
        <div className={currentPage === 1 & currentSection === 2 ?
          'autumn-imageContainer__text1 autumn-image-text-1-in' :
          'autumn-imageContainer__text1 autumn-image-text-1-out'}>
          <h1>Lorem Ipsum Damet</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h2>
        </div>
        <img className={currentPage === 1 && currentSection === 2 ?
          'autumn-imageContainer__image2 autumn-image-2-in' :
          'autumn-imageContainer__image2 autumn-image-2-out'} src={AutumnImage2} alt="autumn 2" />
        <div className={currentPage === 1 && currentSection === 2 ?
          'autumn-imageContainer__text2 autumn-image-text-2-in' :
          'autumn-imageContainer__text2 autumn-image-text-2-out'}>
          <h1>Lorem Ipsum Damet</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h2>
        </div>
      </div>
    </div>
  )
}