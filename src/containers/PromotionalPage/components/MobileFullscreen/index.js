import React from "react";
import "./styles.scss";

import Bear from "../../../../assets/svgs/Bear.svg";

import ParticlesContainer from "../ParticlesContainer";

import Languages from '../../../../multiLanguages/language';

export default function MobileFullscreen({ setFull, hide, language }) {
  return (
    <>
      <div
        className={
          hide ? "mobileFullScreenContainer hide" : "mobileFullScreenContainer"
        }
      >
        <h1 className="mobileFullScreenContainer-title">ChillMerch</h1>
        <img
          src={Bear}
          alt="Bear Logo"
          className="mobileFullScreenContainer-bear"
        />
        <h1>
          {Languages[language].fullscreen.title}
        </h1>
        <h2>
          {Languages[language].fullscreen.subTitle}
        </h2>
        <button onClick={setFull}>
          {language === "english" ? "Allow" : "Permitir"}
        </button>
      <ParticlesContainer season={0} />
      </div>
    </>
  );
}
