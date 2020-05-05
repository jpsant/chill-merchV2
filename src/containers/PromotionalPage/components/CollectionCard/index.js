import React from 'react';
import './styles.scss';

import card1 from '../../../../assets/images/card-1.png';

import Heart from '../../../../assets/svgs/heart.svg';
import Rating from '../../../../assets/svgs/rating.svg';
import Details from '../../../../assets/svgs/details.svg';

export default function Card({ image, BGColor, title, liked, rating, alt }) {
  return (
    <div className="CollectionCard-container">
      <img className="CollectionCard-container__image" src={card1} alt={alt} />
      <div className="CollectionCard-container__texts">
        <h1>Casual Choice</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </div>
      <div className="CollectionCard-container__buttons">
        <img src={Heart} alt="Like Heart"/>
        <img src={Rating} alt="Collection Rating"/>
        <img src={Details} alt="Collection Rating"/>
      </div>
    </div>
  )
}