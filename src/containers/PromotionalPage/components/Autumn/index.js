import React from "react";
import "./styles.scss";

import AutumnImage1 from "../../../../assets/images/autumn-1.png";
import AutumnImage1Mobile from "../../../../assets/images/autumn-1-mobile.png";
import AutumnImage2 from "../../../../assets/images/autumn-2.png";
import AutumnImage2Mobile from "../../../../assets/images/autumn-2-mobile.png";

import AutumnLeaf from "../../../../assets/svgs/autumn-leaf.svg";

import Languages from '../../../../multiLanguages/language';

export default function Autumn({ language, currentPage, currentSection }) {
  return (
    <div className="autumn">
      <div className="autumn-titleContainer">
        <div className="autumn-titleContainer-text">
          <h1
            className={
              currentPage === 1 && currentSection === 2
                ? "autumn-titleContainer-text-h1 logo-text-1-in"
                : "autumn-titleContainer-text-h1 logo-text-out"
            }
          >
            {Languages[language].seasons.autumn.title}
          </h1>
          <h2
            className={
              currentPage === 1 && currentSection === 2
                ? "autumn-titleContainer-text-h2 logo-text-2-in"
                : "autumn-titleContainer-text-h2 logo-text-out"
            }
          >
            {Languages[language].seasons.autumn.subTitle}
          </h2>
        </div>
        <img
          className={
            currentPage === 1 && currentSection === 2
              ? "autumn-titleContainer-autumn-leaf logo-in"
              : "autumn-titleContainer-autumn-leaf logo-out"
          }
          src={AutumnLeaf}
          alt="Autumn Leaf"
        />
      </div>
      <div className="autumn-imageContainer">
        <img
          className={
            currentPage === 1 && currentSection === 2
              ? "autumn-imageContainer__image1 autumn-image-1-in"
              : "autumn-imageContainer__image1 autumn-image-1-out"
          }
          src={AutumnImage1}
          alt="autumn 1"
        />
        <img
          className={
            currentPage === 1 && currentSection === 2
              ? "autumn-imageContainer__image1-mobile autumn-image-1-in"
              : "autumn-imageContainer__image1-mobile autumn-image-1-out"
          }
          src={AutumnImage1Mobile}
          alt="autumn 1"
        />
        <div
          className={
            (currentPage === 1) & (currentSection === 2)
              ? "autumn-imageContainer__text1 autumn-image-text-1-in"
              : "autumn-imageContainer__text1 autumn-image-text-1-out"
          }
        >
          <h1>{Languages[language].seasons.autumn.text1.h1}</h1>
          <h2>{Languages[language].seasons.autumn.text1.h2}</h2>
        </div>
        <img
          className={
            currentPage === 1 && currentSection === 2
              ? "autumn-imageContainer__image2 autumn-image-2-in"
              : "autumn-imageContainer__image2 autumn-image-2-out"
          }
          src={AutumnImage2}
          alt="autumn 2"
        />
        <img
          className={
            currentPage === 1 && currentSection === 2
              ? "autumn-imageContainer__image2-mobile autumn-image-2-in"
              : "autumn-imageContainer__image2-mobile autumn-image-2-out"
          }
          src={AutumnImage2Mobile}
          alt="autumn 2"
        />
        <div
          className={
            currentPage === 1 && currentSection === 2
              ? "autumn-imageContainer__text2 autumn-image-text-2-in"
              : "autumn-imageContainer__text2 autumn-image-text-2-out"
          }
        >
          <h1>{Languages[language].seasons.autumn.text2.h1}</h1>
          <h2>{Languages[language].seasons.autumn.text2.h2}</h2>
        </div>
      </div>
    </div>
  );
}