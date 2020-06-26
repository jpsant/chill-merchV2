import React from "react";
import "./styles.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ParticlesBackground from "../../components/ParticlesContainer";

import Card from "../../components/CollectionCard";

import image1 from "../../../../assets/images/card-1.png";
import image2 from "../../../../assets/images/card-2.png";
import image3 from "../../../../assets/images/card-3.png";
import image4 from "../../../../assets/images/card-4.png";
import image5 from "../../../../assets/images/card-5.png";
import image6 from "../../../../assets/images/card-6.png";

import Language from '../../../../multiLanguages/language';

export default function CollectionstSection({ season, language, currentPage }) {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: {
        max: 500,
        min: 0,
      },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <ParticlesBackground season={season} />
      <div className="collectionsSectionContainer">
        <h1
          className={
            currentPage === 2
              ? "collectionsSectionContainer-h1 collections-title-in"
              : "collectionsSectionContainer-h1 collections-title-out "
          }
        >
          {Language[language].collectionsSection.title}
        </h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          className={
            currentPage === 2
              ? "collectionsSectionContainer__carousel collections-corousel-in"
              : "collectionsSectionContainer__carousel collections-carousel-out"
          }
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="carousel-item"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable={false}
        >
          <Card
            language={language}
            title={Language[language].collectionsSection.cards.card1}
            BGColor="#114566"
            image={image1}
          />
          <Card
            language={language}
            title={Language[language].collectionsSection.cards.card2}
            BGColor="#954930"
            image={image2}
          />
          <Card
            language={language}
            title={Language[language].collectionsSection.cards.card3}
            BGColor="#254F55"
            image={image3}
          />
          <Card
            language={language}
            title={Language[language].collectionsSection.cards.card4}
            BGColor="#273944"
            image={image4}
          />
          <Card
            language={language}
            title={Language[language].collectionsSection.cards.card5}
            BGColor="#327773"
            image={image5}
          />
          <Card
            language={language}
            title={Language[language].collectionsSection.cards.card6}
            BGColor="#9B041F"
            image={image6}
          />
        </Carousel>
      </div>
    </>
  );
}
