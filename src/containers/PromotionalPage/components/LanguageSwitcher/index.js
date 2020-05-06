import React, { useState } from 'react';
import './styles.scss';

import languageBG from '../../../../assets/svgs/languageBG.svg';
import euaFlag from '../../../../assets/svgs/eua-flag.svg';
import brazilFlag from '../../../../assets/svgs/brazil-flag.svg';

import brazilIcon from '../../../../assets/svgs/brazil-icon.svg';
import euaIcon from '../../../../assets/svgs/eua-icon.svg';


export default function LanguageSwitcher({ language, languageChanger }) {

  const [modal, setModal] = useState(false);

  return (
    <div className="languageSwitcherContainer">
      <img className="languageSwitcherContainer-languageSwitcherBG" src={languageBG} alt="languageSwitcher BG" />
      <img onClick={() => setModal(!modal)}
        className="languageSwitcherContainer-languageSwitcherFlag" src={language === 'english' ? euaFlag : brazilFlag} alt="languageSwitcher BG" />
      <div className="languageSwitcherContainer__modal" style={{ opacity: modal ? '1' : '0', visibility: modal ? 'visible' : 'hidden' }}>
        <img onClick={() => { languageChanger('portuguese'); setModal(false); }} className="languageSwitcherContainer__modal-brazil" src={brazilIcon} alt="Brazi Icon" />
        <img onClick={() => { languageChanger('english'); setModal(false); }} className="languageSwitcherContainer__modal-eua" src={euaIcon} alt="EUA Icon" />
      </div>
    </div>
  )
}