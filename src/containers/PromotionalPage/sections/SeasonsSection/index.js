import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles.scss';

import BearLogo from '../../../../assets/svgs/Bear.svg';
import Snow from '../../../../assets/svgs/snow.svg';
import SpringFlower from '../../../../assets/svgs/spring-flower.svg'
import AutumnLeaf from '../../../../assets/svgs/autumn-leaf.svg'
import Sun from '../../../../assets/svgs/sun.svg'

import WinterImage1 from '../../../../assets/images/winter-1.png';
import WinterImage2 from '../../../../assets/images/winter-2.png';

export default function SeasonsSection({ currentPage, currentSection }) {

  const winter = (
    <div className="seasonSectionContainer__winter">
      <div className="seasonSectionContainer__winter-titleContainer">
        <div className="seasonSectionContainer__winter-titleContainer-text">
          <h1>Winter</h1>
          <h2>Say Hello to the cold days!</h2>
        </div>
        <img className="seasonSectionContainer__winter-titleContainer-snow-flake" src={Snow} alt="Snow Flake" />
      </div>
      <div className="seasonSectionContainer__winter-imageContainer">
        <img className="seasonSectionContainer__winter-imageContainer__image1" src={WinterImage1} alt="Winter 1" />
        <div className="seasonSectionContainer__winter-imageContainer__text1">
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
        <img className="seasonSectionContainer__winter-imageContainer__image2" src={WinterImage2} alt="Winter 2" />
        <div className="seasonSectionContainer__winter-imageContainer__text2">
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
          <h1>Spring</h1>
          <h2>Say Hello to the cold days!</h2>
        </div>
        <img className="seasonSectionContainer__spring-titleContainer-snow-flake" src={SpringFlower} alt="Spring Flower" />
      </div>
      <div className="seasonSectionContainer__spring-imageContainer">
        <img className="seasonSectionContainer__spring-imageContainer__image1" src={WinterImage1} alt="Winter 1" />
        <div className="seasonSectionContainer__spring-imageContainer__text1">
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
        <img className="seasonSectionContainer__spring-imageContainer__image2" src={WinterImage2} alt="Winter 2" />
        <div className="seasonSectionContainer__spring-imageContainer__text2">
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
      </div>
    </div>
  );

  const autumn = (
    <div className="seasonSectionContainer__winter">
      <div className="seasonSectionContainer__winter-titleContainer">
        <div className="seasonSectionContainer__winter-titleContainer-text">
          <h1>Autumn</h1>
          <h2>Say Hello to the cold days!</h2>
        </div>
        <img className="seasonSectionContainer__winter-titleContainer-snow-flake" src={AutumnLeaf} alt="Autumn Leaf" />
      </div>
      <div className="seasonSectionContainer__winter-imageContainer">
        <img className="seasonSectionContainer__winter-imageContainer__image1" src={WinterImage1} alt="Winter 1" />
        <div className="seasonSectionContainer__winter-imageContainer__text1">
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
        <img className="seasonSectionContainer__winter-imageContainer__image2" src={WinterImage2} alt="Winter 2" />
        <div className="seasonSectionContainer__winter-imageContainer__text2">
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
      </div>
    </div>
  );

  const summer = (
    <div className="seasonSectionContainer__winter">
      <div className="seasonSectionContainer__winter-titleContainer">
        <div className="seasonSectionContainer__winter-titleContainer-text">
          <h1>Summer</h1>
          <h2>Say Hello to the cold days!</h2>
        </div>
        <img className="seasonSectionContainer__winter-titleContainer-snow-flake" src={Sun} alt="Sun" />
      </div>
      <div className="seasonSectionContainer__winter-imageContainer">
        <img className="seasonSectionContainer__winter-imageContainer__image1" src={WinterImage1} alt="Winter 1" />
        <div className="seasonSectionContainer__winter-imageContainer__text1">
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel. </h2>
        </div>
        <img className="seasonSectionContainer__winter-imageContainer__image2" src={WinterImage2} alt="Winter 2" />
        <div className="seasonSectionContainer__winter-imageContainer__text2">
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
      <img className="seasonSectionContainer__bearLogo" src={BearLogo} alt="Bear Logo" />
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