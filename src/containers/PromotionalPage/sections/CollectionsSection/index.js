import React from 'react';
import './styles.scss';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card from '../../components/CollectionCard';

import image1 from '../../../../assets/images/card-1.png';
import image2 from '../../../../assets/images/card-2.png';
import image3 from '../../../../assets/images/card-3.png';
import image4 from '../../../../assets/images/card-4.png';
import image5 from '../../../../assets/images/card-5.png';
import image6 from '../../../../assets/images/card-6.png';

export default function CollectionstSection({ season, language }) {

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
    <div className="collectionsSectionContainer"
      style={{
        background: season === 0 ? "#6291AF" :
          season === 1 ? "#D46B7A" :
            season === 2 ? "#EA8C5C" :
              season === 3 ? "#E9C02E" : "#6291AF"
      }}>
      <h1 className="collectionsSectionContainer-h1">{language === 'english' ? 'For all the Occasions' : 'Para todas as Ocasiões'}</h1>
      <Carousel
        partialVisible={false}
        arrows
        autoPlay={true}
        autoPlaySpeed={3000}
        className="collectionsSectionContainer__carousel"
        containerClass="container-with-dots"
        focusOnSelect={false}
        infinite
        itemClass="carousel-item"
        keyBoardControl
        minimumTouchDrag={80}
        responsive={responsive}
        showDots={false}
        transitionDuration={600}
      >
        <Card language={language} title={language === 'english' ? 'Casual Choise' : 'Escolha Casual'} BGColor="#114566" image={image1} />
        <Card language={language} title={language === 'english' ? 'Sunday Morning' : 'Doming de Manhã'} BGColor="#954930" image={image2} />
        <Card language={language} title={language === 'english' ? 'Morning Wakeup' : 'Café da manhã'} BGColor="#254F55" image={image3} />
        <Card language={language} title={language === 'english' ? 'Workout Time!' : 'Hora de Suar!'} BGColor="#273944" image={image4} />
        <Card language={language} title={language === 'english' ? 'Winter Collection' : 'Coleção de inverno'} BGColor="#327773" image={image5} />
        <Card language={language} title={language === 'english' ? 'Player 1 Start!' : 'Jogador Nº 1'} BGColor="#9B041F" image={image6} />
      </Carousel>
    </div>
  )
}