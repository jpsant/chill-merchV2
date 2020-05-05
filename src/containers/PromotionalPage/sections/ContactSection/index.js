import React from 'react';
import './styles.scss';

import Bear from '../../../../assets/svgs/Bear.svg';

import Instagram from '../../../../assets/svgs/instagram.svg';
import Twitter from '../../../../assets/svgs/twitter.svg';
import Facebook from '../../../../assets/svgs/facebook.svg';
import Snapchat from '../../../../assets/svgs/snapchat.svg';

import WinterSend from '../../../../assets/svgs/winter-send.svg';
import SpringSend from '../../../../assets/svgs/spring-send.svg';
import AutumnSend from '../../../../assets/svgs/autumn-send.svg';
import SummerSend from '../../../../assets/svgs/summer-send.svg';

export default function ContactSection({ season }) {
  return (
    <div className="contactSectionContainer"
      style={{
        background: season === 0 ? "#6291AF" :
          season === 1 ? "#D46B7A" :
            season === 2 ? "#EA8C5C" :
              season === 3 ? "#E9C02E" : "#6291AF"
      }}>

      <div className="contactSectionContainer__visit">
        <h1 className="contactSectionContainer__visit-title">
          What are you waiting for?!
        </h1>
        <img className="contactSectionContainer__visit-logo" src={Bear} alt="Bear logo" />
        <button className="contactSectionContainer__visit-button" style={{
          color: season === 0 ? "#6291AF" :
            season === 1 ? "#D46B7A" :
              season === 2 ? "#EA8C5C" :
                season === 3 ? "#E9C02E" : "#6291AF"
        }}>
          Visit our Website!
        </button>
      </div>

      <div className="contactSectionContainer__social">
        <h1>Follow us on Social Media!</h1>
        <div className="contactSectionContainer__social-links">
          <a href="">
            <img className="contactSectionContainer__social-links-instagram" src={Instagram} alt="Instagram Link" />
          </a>
          <a href="">
            <img className="contactSectionContainer__social-links-facebook" src={Facebook} alt="Facebook Link" />
          </a>
          <a href="">
            <img className="contactSectionContainer__social-links-twitter" src={Twitter} alt="Twitter Link" />
          </a>
          <a href="">
            <img className="contactSectionContainer__social-links-snapchat" src={Snapchat} alt="Snapchat Link" />
          </a>
        </div>
      </div>

      <div className="contactSectionContainer__newsLetter">
        <h1>
          Subscribe to our newsletter!
        </h1>
        <form action="">
          <input type="text" placeholder="Your Email" />
          <button type="submit">
            <img src={
              season === 0 ? WinterSend:
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