import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';

import HomeSection from './sections/HomeSection';
import CollectionsSection from './sections/CollectionsSection';
import SeasonsSection from './sections/SeasonsSection';
import ContactSection from './sections/ContactSection';

import LanguageSwitcher from './components/LanguageSwitcher';
import Pagination from './components/Pagination';

import BearLogo from '../../assets/svgs/Bear.svg';

import './styles.scss';

class PromotionalPage extends Component {

  state = {
    currentPage: 1,
    currentLanguage: 'english',
    seasonsSection: 0
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  }

  handleLanguageChange = language => {
    this.setState({ currentLanguage: language })
  }

  seasonsSectionHandler = (number) => {
    let newSection = number + this.state.seasonsSection;
    
    if (newSection < 0) {
      this.setState({ seasonsSection: 0 });
    }
    else if (newSection >= 3) {
      this.setState({ seasonsSection: 3 });
    }
    else {
      this.setState({ seasonsSection: newSection })
    }
  }

  render() {
    return (
      <>
      <img className="BearLogo" src={BearLogo} alt="Bear Logo"
        style={{opacity: this.state.currentPage === 1 ? 1 : this.state.currentPage === 2 ? 1 : 0}}/>
        <Pagination
          handleSection={(number) => this.seasonsSectionHandler(number)}
          currentPage={this.state.currentPage}
          section={(number) => this.handlePageChange(number)}
          currentSection={this.state.seasonsSection} />
        <LanguageSwitcher
          language={this.state.currentLanguage}
          languageChanger={this.handleLanguageChange} />
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <HomeSection season={this.state.seasonsSection} currentPage={this.state.currentPage} language={this.state.currentLanguage} />
          <SeasonsSection season={this.state.seasonsSection}  currentSection={this.state.seasonsSection} currentPage={this.state.currentPage} language={this.state.currentLanguage} />
          <CollectionsSection season={this.state.seasonsSection}  currentPage={this.state.currentPage} language={this.state.currentLanguage} />
          <ContactSection season={this.state.seasonsSection}  currentPage={this.state.currentPage} language={this.state.currentLanguage} />
        </ReactPageScroller>
      </>
    )
  }
}

export default PromotionalPage;