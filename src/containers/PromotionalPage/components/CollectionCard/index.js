import React from 'react';
import './styles.scss';

import Heart from '../../../../assets/svgs/heart.svg';
import Rating from '../../../../assets/svgs/rating.svg';
import Details from '../../../../assets/svgs/details.svg';

export default function Card({ image, BGColor, title, liked, rating, alt, language }) {
  return (
    <div className="CollectionCard-container" style={{ backgroundColor: BGColor }}>
      <img className="CollectionCard-container__image" src={image} alt={alt} />
      <div className="CollectionCard-container__texts">
        <h1 style={{fontSize: language === 'portuguese' ? '31px' : '32px'}}>{title}</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </div>
      <div className="CollectionCard-container__buttons">
        <img src={Heart} alt="Like Heart" />
        <img src={Rating} alt="Collection Rating" />
        <img src={Details} alt="Collection Rating" />
      </div>
    </div>
  )
}