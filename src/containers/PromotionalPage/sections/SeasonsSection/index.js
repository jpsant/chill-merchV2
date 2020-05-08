import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles.scss';

import Snow from '../../../../assets/svgs/snow.svg';
import SpringFlower from '../../../../assets/svgs/spring-flower.svg'
import AutumnLeaf from '../../../../assets/svgs/autumn-leaf.svg'
import Sun from '../../../../assets/svgs/sun.svg'

import WinterImage1 from '../../../../assets/images/winter-1.png';
import WinterImage2 from '../../../../assets/images/winter-2.png';

import SpringImage1 from '../../../../assets/images/spring-1.png';
import SpringImage2 from '../../../../assets/images/spring-2.png';

import AutumnImage1 from '../../../../assets/images/autumn-1.png';
import AutumnImage2 from '../../../../assets/images/autumn-2.png';

import SummerImage1 from '../../../../assets/images/summer-1.png';
import SummerImage2 from '../../../../assets/images/summer-2.png';


export default function SeasonsSection({ currentPage, currentSection, language }) {

  const winter = (
    <div className="seasonSectionContainer__winter">
      <div className="seasonSectionContainer__winter-titleContainer">
        <div className="seasonSectionContainer__winter-titleContainer-text">
          <h1 className={currentPage === 1 && currentSection === 0 ? 'winter-text-1-in' : 'winter-text-out'}>
            {language === 'english' ? 'Winter' : 'Inverno'}
          </h1>
          <h2 className={currentPage === 1 && currentSection === 0 ? 'winter-text-2-in' : 'winter-text-out'}>
            {language === 'english' ? 'Say Hello to the cold days!' : 'Diga Olá para os dias frios!'}
          </h2>
        </div>
        <img className={currentPage === 1 && currentSection === 0 ?
          'seasonSectionContainer__winter-titleContainer-snow-flake winter-logo-in' :
          'seasonSectionContainer__winter-titleContainer-snow-flake winter-logo-out'} src={Snow} alt="Snow Flake" />
      </div>
      <div className="seasonSectionContainer__winter-imageContainer">
        <img className={currentPage === 1 && currentSection === 0 ?
          'seasonSectionContainer__winter-imageContainer__image1 winter-image-1-in' :
          'seasonSectionContainer__winter-imageContainer__image1 winter-image-1-out'} src={WinterImage1} alt="Winter 1" />
        <div className={currentPage === 1 && currentSection === 0 ?
          'seasonSectionContainer__winter-imageContainer__text1 winter-image-text-1-in' :
          'seasonSectionContainer__winter-imageContainer__text1 winter-text-out'}>
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
        <img className={currentPage === 1 && currentSection === 0 ?
          'seasonSectionContainer__winter-imageContainer__image2 winter-image-2-in' :
          'seasonSectionContainer__winter-imageContainer__image2 winter-image-2-out'} src={WinterImage2} alt="Winter 2" />
        <div className={currentPage === 1 && currentSection === 0 ?
          'seasonSectionContainer__winter-imageContainer__text2 winter-image-text-1-in' :
          'seasonSectionContainer__winter-imageContainer__text2 winter-text-out'}>
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
      </div>
    </div>
  );

  const spring = (
    <div className="seasonSectionContainer__spring">
      <div className="seasonSectionContainer__spring-titleContainer">
        <div className="seasonSectionContainer__spring-titleContainer-text">
          <h1 className={currentPage === 1 && currentSection === 1 ? 'winter-text-1-in' : 'winter-text-out'}>
            {language === 'english' ? 'Spring' : 'Primavera'}
          </h1>
          <h2 style={{ width: language === 'portuguese' ? 'auto' : '272px' }}
            className={currentPage === 1 && currentSection === 1 ? 'winter-text-2-in' : 'winter-text-out'}>
            {language === 'english' ? 'The Love grows here!' : 'Onde o amor começa a florescer!'}
          </h2>
        </div>
        <img className={currentPage === 1 && currentSection === 1 ?
          'seasonSectionContainer__winter-titleContainer-snow-flake winter-logo-in' :
          'seasonSectionContainer__winter-titleContainer-snow-flake winter-logo-out'} src={SpringFlower} alt="Spring Flower" />
      </div>
      <div className="seasonSectionContainer__spring-imageContainer">
        <img className={currentPage === 1 && currentSection === 1 ?
          'seasonSectionContainer__spring-imageContainer__image1 winter-image-2-in' :
          'seasonSectionContainer__spring-imageContainer__image1 winter-image-2-out'} src={SpringImage1} alt="Spring Merch 1" />
        <div className={currentPage === 1 && currentSection === 1 ?
          'seasonSectionContainer__spring-imageContainer__text1 spring-image-text-1-in' :
          'seasonSectionContainer__spring-imageContainer__text1 winter-text-out'}>
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
        <img className={currentPage === 1 && currentSection === 1 ?
          'seasonSectionContainer__spring-imageContainer__image2 winter-image-1-in' :
          'seasonSectionContainer__spring-imageContainer__image2 winter-image-1-out'} src={SpringImage2} alt="Spring Merch 2" />
        <div className={currentPage === 1 && currentSection === 1 ?
          'seasonSectionContainer__spring-imageContainer__text2 spring-image-text-2-in' :
          'seasonSectionContainer__spring-imageContainer__text2 winter-text-out'}>
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
      </div>
    </div>
  );

  const autumn = (
    <div className="seasonSectionContainer__autumn">
      <div className="seasonSectionContainer__autumn-titleContainer">
        <div className="seasonSectionContainer__autumn-titleContainer-text">
          <h1 className={currentPage === 1 && currentSection === 2 ? 'winter-text-1-in' : 'winter-text-out'}>
            {language === 'english' ? 'Autumn' : 'Outono'}
          </h1>
          <h2 className={currentPage === 1 && currentSection === 2 ? 'winter-text-2-in' : 'winter-text-out'}>
            {language === 'english' ? 'The Season to fall in Love.' : 'A Estação para cair de amores.'}
          </h2>
        </div>
        <img className={currentPage === 1 && currentSection === 2 ?
          'seasonSectionContainer__winter-titleContainer-snow-flake winter-logo-in' :
          'seasonSectionContainer__winter-titleContainer-snow-flake winter-logo-out'} src={AutumnLeaf} alt="Autumn Leaf" />
      </div>
      <div className="seasonSectionContainer__autumn-imageContainer">
        <img className={currentPage === 1 && currentSection === 2 ?
          'seasonSectionContainer__autumn-imageContainer__image1 autumn-image-1-in' :
          'seasonSectionContainer__autumn-imageContainer__image1 winter-image-1-out'} src={AutumnImage1} alt="autumn 1" />
        <div className={currentPage === 1 & currentSection === 2 ?
          'seasonSectionContainer__autumn-imageContainer__text1 autumn-image-text-1-in' :
          'seasonSectionContainer__autumn-imageContainer__text1 winter-text-out'}>
          <h1>Lorem Ipsum Damet</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h2>
        </div>
        <img className={currentPage === 1 && currentSection === 2 ?
          'seasonSectionContainer__autumn-imageContainer__image2 autumn-image-2-in' :
          'seasonSectionContainer__autumn-imageContainer__image2 winter-image-2-out'} src={AutumnImage2} alt="autumn 2" />
        <div className={currentPage === 1 && currentSection === 2 ?
          'seasonSectionContainer__autumn-imageContainer__text2 autumn-image-text-2-in' :
          'seasonSectionContainer__autumn-imageContainer__text2 winter-text-out'}>
          <h1>Lorem Ipsum Damet</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h2>
        </div>
      </div>
    </div>
  );

  const summer = (
    <div className="seasonSectionContainer__summer">
      <div className="seasonSectionContainer__summer-titleContainer">
        <div className="seasonSectionContainer__summer-titleContainer-text">
          <h1 className={currentPage === 1 && currentSection === 3 ? 'winter-text-1-in' : 'winter-text-out'}>
            {language === 'english' ? 'Summer' : 'Verão'}
          </h1>
          <h2 className={currentPage === 1 && currentSection === 3 ? 'winter-text-2-in' : 'winter-text-out'}>
            {language === 'english' ? 'Beach Time!!' : 'Hora da Praia!!'}
          </h2>
        </div>
        <img className={currentPage === 1 && currentSection === 3 ?
          'seasonSectionContainer__winter-titleContainer-snow-flake winter-logo-in' :
          'seasonSectionContainer__winter-titleContainer-snow-flake winter-logo-out'} src={Sun} alt="Sun" />
      </div>
      <div className="seasonSectionContainer__summer-imageContainer">
        <img className={currentPage === 1 && currentSection === 3 ?
          'seasonSectionContainer__summer-imageContainer__image1 summer-image-1-in' :
          'seasonSectionContainer__summer-imageContainer__image1 winter-image-1-out'} src={SummerImage1} alt="summer 1" />
        <div className={currentPage === 1 && currentSection === 3 ?
          'seasonSectionContainer__summer-imageContainer__text1 summer-text-image-1-in' :
          'seasonSectionContainer__summer-imageContainer__text1 winter-text-out'}>
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
        <img className={currentPage === 1 && currentSection === 3 ?
          'seasonSectionContainer__summer-imageContainer__image2 summer-image-2-in' :
          'seasonSectionContainer__summer-imageContainer__image2 winter-image-2-out'} src={SummerImage2} alt="summer 2" />
        <div className={currentPage === 1 && currentSection === 3 ?
          'seasonSectionContainer__summer-imageContainer__text2 summer-text-image-2-in' :
          'seasonSectionContainer__summer-imageContainer__text2 winter-text-out'}>
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
      </div>
    </div>
  );

  return (
    <div className="seasonSectionContainer"
      style={{
        background: currentSection === 0 ? '#6291AF' :
          currentSection === 1 ? '#D46B7A' :
            currentSection === 2 ? '#EA8C5C' :
              currentSection === 3 ? '#E9C02E' : '#6291AF'
      }}>
      <SwitchTransition>
        <CSSTransition
          classNames='fade'
          key={currentSection}>
          {currentSection === 0 ? winter :
            currentSection === 1 ? spring :
              currentSection === 2 ? autumn :
                currentSection === 3 ? summer : null}
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}