import React from 'react';
import './styles.scss';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card from '../../components/CollectionCard';

export default function CollectionstSection() {

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }

  return (
    <div className="collectionsSectionContainer">
      <h1 className="collectionsSectionContainer-h1">Unlimited Collections</h1>
      <Carousel
        partialVisible={true}
        additionalTransfrom={0}
        arrows
        autoPlay={true}
        autoPlaySpeed={3000}
        className="collectionsSectionContainer__carousel"
        containerClass="container-with-dots"
        draggable
        focusOnSelect={true}
        infinite
        itemClass="carousel-item"
        keyBoardControl
        minimumTouchDrag={80}
        responsive={responsive}
        showDots={false}
        swipeable
        transitionDuration={500}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </div>
  )
}