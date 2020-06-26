import React from "react";
import "./styles.scss";

import Bear from "../../../../assets/svgs/Bear.svg";

import Instagram from "../../../../assets/svgs/instagram.svg";
import Twitter from "../../../../assets/svgs/twitter.svg";
import Facebook from "../../../../assets/svgs/facebook.svg";
import Dribbble from "../../../../assets/svgs/dribbble.svg";

import WinterSend from "../../../../assets/svgs/winter-send.svg";
import SpringSend from "../../../../assets/svgs/spring-send.svg";
import AutumnSend from "../../../../assets/svgs/autumn-send.svg";
import SummerSend from "../../../../assets/svgs/summer-send.svg";

import ParticlesBackground from "../../components/ParticlesContainer";

import Languages from '../../../../multiLanguages/language';

export default function ContactSection({ currentPage, season, language }) {
  function submitFormHandler(e) {
    e.preventDefault();
  }

  let colors = ["#6291AF", "#D46B7A", "#EA8C5C", "#E9C02E"];

  let images = [WinterSend, SpringSend, AutumnSend, SummerSend];

  return (
    <div className="contactSectionContainer">
      <ParticlesBackground season={season} />
      <div className="contactSectionContainer__visit">
        <h1
          className={
            currentPage === 3
              ? "contactSectionContainer__visit-title contact-title-in"
              : "contactSectionContainer__visit-title contact-title-out"
          }
          style={{width: language === "english" ? '990px' : 'auto'}}
        >
          {Languages[language].contactSection.title}
        </h1>
        <img
          className={
            currentPage === 3
              ? "contactSectionContainer__visit-logo contact-logo-in"
              : "contactSectionContainer__visit-logo contact-logo-out"
          }
          src={Bear}
          alt="Bear logo"
        />
        <button
          className={
            currentPage === 3
              ? "contactSectionContainer__visit-button contact-button-in"
              : "contactSectionContainer__visit-button contact-title-out"
          }
          style={{ color: colors[season] }}
        >
          {Languages[language].contactSection.button}
        </button>
      </div>

      <div
        className={
          currentPage === 3
            ? "contactSectionContainer__newsLetter newsletter-in"
            : "contactSectionContainer__newsLetter newsletter-out"
        }
      >
        <h1>
          {Languages[language].contactSection.newsletter}
        </h1>
        <form onSubmit={submitFormHandler}>
          <input
            type="email"
            placeholder={Languages[language].contactSection.email}
          />
          <button type="submit">
            <img src={images[season]} alt="submit form" />
          </button>
        </form>
      </div>

      <div
        className={
          currentPage === 3
            ? "contactSectionContainer__social social-media-in"
            : "contactSectionContainer__social social-media-out"
        }
      >
        <h1>
          {Languages[language].contactSection.social}
        </h1>
        <div className="contactSectionContainer__social-links">
          <a href="https://www.instagram.com/jampalo_/">
            <img
              className="contactSectionContainer__social-links-instagram"
              src={Instagram}
              alt="Instagram Link"
            />
          </a>
          <a href="https://www.facebook.com/">
            <img
              className="contactSectionContainer__social-links-facebook"
              src={Facebook}
              alt="Facebook Link"
            />
          </a>
          <a href="https://twitter.com/J_Paaulinho">
            <img
              className="contactSectionContainer__social-links-twitter"
              src={Twitter}
              alt="Twitter Link"
            />
          </a>
          <a href="https://dribbble.com/JSantana">
            <img
              className="contactSectionContainer__social-links-dribbble"
              src={Dribbble}
              alt="Dribbble Link"
            />
          </a>
        </div>
      </div>
    </div>
  );
}