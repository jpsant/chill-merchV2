import React from 'react';
import './styles.scss';

import Bear from '../../../../assets/svgs/Bear.svg';

import Instagram from '../../../../assets/svgs/instagram.svg';
import Twitter from '../../../../assets/svgs/twitter.svg';
import Facebook from '../../../../assets/svgs/facebook.svg';
import Dribbble from '../../../../assets/svgs/dribbble.svg';

import WinterSend from '../../../../assets/svgs/winter-send.svg';
import SpringSend from '../../../../assets/svgs/spring-send.svg';
import AutumnSend from '../../../../assets/svgs/autumn-send.svg';
import SummerSend from '../../../../assets/svgs/summer-send.svg';

export default function ContactSection({ currentPage, season, language }) {
  return (
    <div className="contactSectionContainer"
      style={{
        background: season === 0 ? "#6291AF" :
          season === 1 ? "#D46B7A" :
            season === 2 ? "#EA8C5C" :
              season === 3 ? "#E9C02E" : "#6291AF"
      }}>

      <div className="contactSectionContainer__visit">
        <h1 className={currentPage === 3 ? 'contactSectionContainer__visit-title contact-title-in' :
          'contactSectionContainer__visit-title contact-title-out'}>
          {language === 'english' ? 'What are you waiting for?!' : 'O que você está esperando?!'}
        </h1>
        <img className={currentPage === 3 ? 'contactSectionContainer__visit-logo contact-logo-in' :
          'contactSectionContainer__visit-logo contact-logo-out'} src={Bear} alt="Bear logo" />
        <button className={currentPage === 3 ? 'contactSectionContainer__visit-button contact-button-in' :
          'contactSectionContainer__visit-button contact-title-out'} style={{
            color: season === 0 ? "#6291AF" :
              season === 1 ? "#D46B7A" :
                season === 2 ? "#EA8C5C" :
                  season === 3 ? "#E9C02E" : "#6291AF"
          }}>
          {language === 'english' ? 'Visit our Website!' : 'Visite nosso Website!'}
        </button>
      </div>

      <div className={currentPage === 3 ? 'contactSectionContainer__social social-media-in' :
        'contactSectionContainer__social social-media-out'}>
        <h1>
          {language === 'english' ? 'Follow us on Social Media' : 'Nos siga nas Redes Sociais'}
        </h1>
        <div className="contactSectionContainer__social-links">
          <a href="https://www.instagram.com/jampalo_/">
            <img className="contactSectionContainer__social-links-instagram" src={Instagram} alt="Instagram Link" />
          </a>
          <a href="https://www.facebook.com/">
            <img className="contactSectionContainer__social-links-facebook" src={Facebook} alt="Facebook Link" />
          </a>
          <a href="https://twitter.com/J_Paaulinho">
            <img className="contactSectionContainer__social-links-twitter" src={Twitter} alt="Twitter Link" />
          </a>
          <a href="https://dribbble.com/JSantana">
            <img className="contactSectionContainer__social-links-dribbble" src={Dribbble} alt="Dribbble Link" />
          </a>
        </div>
      </div>

      <div className={currentPage === 3 ? 'contactSectionContainer__newsLetter newsletter-in' :
        'contactSectionContainer__newsLetter newsletter-out'}>
        <h1>
          {language === 'english' ? 'Subscribe to our newsletter' : 'Assine a nossa newsletter'}
        </h1>
        <form action="">
          <input type="text" placeholder={language === 'english' ? 'Your E-mail' : 'Seu E-mail'} />
          <button type="submit">
            <img src={
              season === 0 ? WinterSend :
                season === 1 ? SpringSend :
                  season === 2 ? AutumnSend :
                    season === 3 ? SummerSend : WinterSend
            } alt="submit form" />
          </button>
        </form>
      </div>
    </div>
  )
}