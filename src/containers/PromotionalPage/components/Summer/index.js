import React from 'react';
import './styles.scss'

import SummerImage1 from '../../../../assets/images/summer-1.png';
import SummerImage2 from '../../../../assets/images/summer-2.png';

import Sun from '../../../../assets/svgs/sun.svg'

export default function Summer({ currentPage, currentSection, language }) {
  return (
    <div className="summer">
      <div className="summer-titleContainer">
        <div className="summer-titleContainer-text">
          <h1 className={currentPage === 1 && currentSection === 3 ?
            'summer-titleContainer-text-h1 logo-text-1-in' :
            'summer-titleContainer-text-h1 logo-text-out'}>
            {language === 'english' ? 'Summer' : 'Verão'}
          </h1>
          <h2 className={currentPage === 1 && currentSection === 3 ?
            'summer-titleContainer-text-h2 logo-text-2-in' :
            'summer-titleContainer-text-h2 logo-text-out'}>
            {language === 'english' ? 'Beach Time!!' : 'Hora da Praia!!'}
          </h2>
        </div>
        <img className={currentPage === 1 && currentSection === 3 ?
          'summer-titleContainer-sun logo-in' :
          'summer-titleContainer-sun logo-out'} src={Sun} alt="Sun" />
      </div>
      <div className="summer-imageContainer">
        <img className={currentPage === 1 && currentSection === 3 ?
          'summer-imageContainer__image1 summer-image-1-in' :
          'summer-imageContainer__image1 winter-image-1-out'} src={SummerImage1} alt="summer 1" />
        <div className={currentPage === 1 && currentSection === 3 ?
          'summer-imageContainer__text1 summer-text-image-1-in' :
          'summer-imageContainer__text1 winter-text-out'}>
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
        <img className={currentPage === 1 && currentSection === 3 ?
          'summer-imageContainer__image2 summer-image-2-in' :
          'summer-imageContainer__image2 winter-image-2-out'} src={SummerImage2} alt="summer 2" />
        <div className={currentPage === 1 && currentSection === 3 ?
          'summer-imageContainer__text2 summer-text-image-2-in' :
          'summer-imageContainer__text2 winter-text-out'}>
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
      </div>
    </div>
  )
}