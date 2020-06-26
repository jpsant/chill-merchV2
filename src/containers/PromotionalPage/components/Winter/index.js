import React from "react";
import "./styles.scss";

import WinterImage1 from "../../../../assets/images/winter-1.png";
import WinterImage2 from "../../../../assets/images/winter-2.png";

import Snow from "../../../../assets/svgs/snow.svg";

export default function Winter({ language, currentPage, currentSection }) {
  return (
    <div className="winter">
      <div className="winter-titleContainer">
        <div className="winter-titleContainer-text">
          <h1
            className={
              currentPage === 1 && currentSection === 0
                ? "winter-titleContainer-text-h1 logo-text-1-in"
                : "winter-titleContainer-text-h1 logo-text-out"
            }
          >
            {language === "english" ? "Winter" : "Inverno"}
          </h1>
          <h2
            className={
              currentPage === 1 && currentSection === 0
                ? "winter-titleContainer-text-h2 logo-text-2-in"
                : "winter-titleContainer-text-h2 logo-text-out"
            }
          >
            {language === "english"
              ? "Say Hello to the cold days!"
              : "Diga Olá para os dias frios!"}
          </h2>
        </div>
        <img
          className={
            currentPage === 1 && currentSection === 0
              ? "winter-titleContainer-snow-flake logo-in"
              : "winter-titleContainer-snow-flake logo-out"
          }
          src={Snow}
          alt="Snow Flake"
        />
      </div>
      <div className="winter-imageContainer">
        <img
          className={
            currentPage === 1 && currentSection === 0
              ? "winter-imageContainer__image1 winter-image-1-in"
              : "winter-imageContainer__image1 winter-image-1-out"
          }
          src={WinterImage1}
          alt="Winter 1"
        />
        <div
          className={
            currentPage === 1 && currentSection === 0
              ? "winter-imageContainer__text1 winter-image-text-1-in"
              : "winter-imageContainer__text1 logo-text-out"
          }
        >
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel.</h2>
        </div>
        <img
          className={
            currentPage === 1 && currentSection === 0
              ? "winter-imageContainer__image2 winter-image-2-in"
              : "winter-imageContainer__image2 winter-image-2-out"
          }
          src={WinterImage2}
          alt="Winter 2"
        />
        <div
          className={
            currentPage === 1 && currentSection === 0
              ? "winter-imageContainer__text2 winter-image-text-2-in"
              : "winter-imageContainer__text2 logo-text-out"
          }
        >
          <h1>Lorem Ipsum</h1>
          <h2>example lotem damet asbterco limtel.</h2>
        </div>
      </div>
    </div>
  );
}
