import React from 'react';
import './styles.scss';

import SpringImage1 from '../../../../assets/images/spring-1.png';
import SpringImage1mobile from '../../../../assets/images/spring-1-mobile.png';
import SpringImage2 from '../../../../assets/images/spring-2.png';
import SpringImage2mobile from '../../../../assets/images/spring-2-mobile.png';

import SpringFlower from '../../../../assets/svgs/spring-flower.svg';

export default function ({ language, currentSection, currentPage }) {
  return (
    <div className="spring">
      <div className="spring-titleContainer">
        <div className="spring-titleContainer-text">
          <h1 className={currentPage === 1 && currentSection === 1 ?
            'spring-titleContainer-text-h1 logo-text-1-in' :
            'spring-titleContainer-text-h1 logo-text-out'}>
            {language === 'english' ? 'Spring' : 'Primavera'}
          </h1>
          <h2 style={{ width: language === 'portuguese' ? 'auto' : '272px' }}
            className={currentPage === 1 && currentSection === 1 ?
              'spring-titleContainer-text-h2 logo-text-2-in' :
              'spring-titleContainer-text-h2 logo-text-out'}>
            {language === 'english' ? 'The Love grows here!' : 'Onde o amor começa a florescer!'}
          </h2>
        </div>
        <img className={currentPage === 1 && currentSection === 1 ?
          'spring-titleContainer-spring-leaf logo-in' :
          'spring-titleContainer-spring-leaf logo-out'} src={SpringFlower} alt="Spring Flower" />
      </div>
      <div className="spring-imageContainer">
        <img className={currentPage === 1 && currentSection === 1 ?
          'spring-imageContainer__image1 spring-image-1-in' :
          'spring-imageContainer__image1 spring-image-1-out'} src={SpringImage1} alt="Spring Merch 1" />
        <img className={currentPage === 1 && currentSection === 1 ?
          'spring-imageContainer__image1-mobile spring-image-1-in' :
          'spring-imageContainer__image1-mobile spring-image-1-out'} src={SpringImage1mobile} alt="Spring Merch Mobile 1" />
        <div className={currentPage === 1 && currentSection === 1 ?
          'spring-imageContainer__text1 spring-image-text-1-in' :
          'spring-imageContainer__text1 spring-image-text-1-out'}>
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel.</h2>
        </div>
        <img className={currentPage === 1 && currentSection === 1 ?
          'spring-imageContainer__image2 spring-image-2-in' :
          'spring-imageContainer__image2 spring-image-2-out'} src={SpringImage2} alt="Spring Merch 2" />
        <img className={currentPage === 1 && currentSection === 1 ?
          'spring-imageContainer__image2-mobile spring-image-2-in' :
          'spring-imageContainer__image2-mobile spring-image-2-out'} src={SpringImage2mobile} alt="Spring Merch Mobile 2" />
        <div className={currentPage === 1 && currentSection === 1 ?
          'spring-imageContainer__text2 spring-image-text-2-in' :
          'spring-imageContainer__text2 spring-image-text-2-out'}>
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel.</h2>
        </div>
      </div>
    </div>
  )
}