import React from 'react';
import './styles.scss';

import SectionsManager from '../SectionsManager';

export default function Pagination({ currentPage, section, handleSection, currentSection }) {
  return (
    <>
      <SectionsManager currentSection={currentSection} changeSection={(number) => handleSection(number)} currentPage={currentPage} />
      <ul className="pagination">
        <li className={currentPage === 0 ? "selectedPage" : ''}>
          <a href="#" onClick={() => section(0)}></a>
        </li>
        <li className={currentPage === 1 ? "selectedPage" : ''}>
          <a href="#" onClick={() => section(1)}></a>
        </li>
        <li className={currentPage === 2 ? "selectedPage" : ''}>
          <a href="#" onClick={() => section(2)}></a>
        </li>
        <li className={currentPage === 3 ? "selectedPage" : ''}>
          <a href="#" onClick={() => section(3)}></a>
        </li>
      </ul>
    </>
  )
}