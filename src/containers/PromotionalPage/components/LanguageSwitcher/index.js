import React from 'react';
import './styles.scss';

import languageBG from '../../../../assets/svgs/languageBG.svg';
import euaFlag from '../../../../assets/svgs/eua-flag.svg';

export default function LanguageSwitcher({ language, languageChanger }) {
  return (
    <div className="languageSwitcherContainer">
      <img className="languageSwitcherContainer-languageSwitcherBG" src={languageBG} alt="languageSwitcher BG" />
      <img className="languageSwitcherContainer-languageSwitcherFlag" src={euaFlag} alt="languageSwitcher BG" />
    </div>
  )
}