import React from "react";
import "./styles.scss";

import MobileBackground from "../../../../assets/svgs/languageMobileBG.svg";
import BearLogo from "../../../../assets/svgs/Bear.svg";

export default function MobileMenu({
  toggleMenu,
  isToggled,
  currentSection,
  switchSection,
  language,
}) {
  return (
    <>
      <div className="mobileMenuBackground">
        <img
          src={MobileBackground}
          alt="mobile background"
          className="mobileMenuBackground-image"
        />
        <button
          onClick={toggleMenu}
          className={
            isToggled
              ? "mobileMenuBackground-button hamburger hamburger--spin is-active"
              : "mobileMenuBackground-button hamburger hamburger--spin"
          }
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div
        className={
          isToggled
            ? "mobileMenuContainer menuIn"
            : "mobileMenuContainer menuOut"
        }
      >
        <img
          src={BearLogo}
          className="mobileMenuContainer-logo"
          alt="Bear Logo"
        />
        <h1 className="mobileMenuContainer-title">ChillMerch</h1>
        <h1
          style={{ opacity: currentSection === 0 ? "1" : "0.5" }}
          onClick={() => {
            switchSection(0);
            toggleMenu();
          }}
        >
          {language === "english" ? "Home" : "Inicio"}
          <hr/>
        </h1>
        <h1
          style={{ opacity: currentSection === 1 ? "1" : "0.5" }}
          onClick={() => {
            switchSection(1);
            toggleMenu();
          }}
        >
          {language === "english" ? "Seasons" : "Estações"}
          <hr/>
        </h1>
        <h1
          style={{ opacity: currentSection === 2 ? "1" : "0.5" }}
          onClick={() => {
            switchSection(2);
            toggleMenu();
          }}
        >
          {language === "english" ? "Collections" : "Coleções"}
          <hr/>
        </h1>
        <h1
          style={{ opacity: currentSection === 3 ? "1" : "0.5" }}
          onClick={() => {
            switchSection(3);
            toggleMenu();
          }}
        >
          {language === "english" ? "Contact" : "Contato"}
          <hr/>
        </h1>
      </div>
    </>
  );
}
