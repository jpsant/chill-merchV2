import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./styles.scss";

import SectionsManager from "../../components/SectionsManager";

import Winter from "../../components/Winter";
import Spring from "../../components/Spring";
import Autumn from "../../components/Autumn";
import Summer from "../../components/Summer";

import ParticlesBackground from "../../components/ParticlesContainer";

export default function SeasonsSection({
  currentPage,
  currentSection,
  language,
  handleSection,
}) {
  let seasons = [
    <Winter
      language={language}
      currentSection={currentSection}
      currentPage={currentPage}
    />,
    <Spring
      language={language}
      currentSection={currentSection}
      currentPage={currentPage}
    />,
    <Autumn
      language={language}
      currentSection={currentSection}
      currentPage={currentPage}
    />,
    <Summer
      language={language}
      currentSection={currentSection}
      currentPage={currentPage}
    />,
  ];
  return (
    <>
      <ParticlesBackground season={currentSection} />
      <div className="seasonSectionContainer">
        <SectionsManager
          currentSection={currentSection}
          changeSection={(number) => handleSection(number)}
          currentPage={currentPage}
        />
        <SwitchTransition>
          <CSSTransition timeout={300} classNames="fade" key={currentSection}>
            {seasons[currentSection]}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}
