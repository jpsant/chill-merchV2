import React from "react";
import "./styles.scss";

import Bear from "../../../../assets/svgs/Bear.svg";

import ParticlesContainer from "../ParticlesContainer";

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
          {language === "english"
            ? "For a better experience on Mobile, we recommend allowing the fullscreen mode."
            : "Para uma melhor experiência no mobile, nós recomendamos ativar o modo Fullsrcreen"}
        </h1>
        <h2>
          {language === "english"
            ? "(you can exit at anytime)"
            : "(Você pode desativar a qualquer momento)"}
        </h2>
        <button onClick={setFull}>
          {language === "english" ? "Allow" : "Permitir"}
        </button>
      <ParticlesContainer season={0} />
      </div>
    </>
  );
}
