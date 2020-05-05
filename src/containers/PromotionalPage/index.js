import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';

import HomeSection from './sections/HomeSection';
import CollectionsSection from './sections/CollectionsSection';
import SeasonsSection from './sections/SeasonsSection';
import ContactSection from './sections/ContactSection';

import LanguageSwitcher from './components/LanguageSwitcher';
import Pagination from './components/Pagination';

class PromotionalPage extends Component {

  state = {
    currentPage: 2,
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
          <HomeSection currentPage={this.state.currentPage} language={this.state.currentLanguage} />
          <SeasonsSection currentSection={this.state.seasonsSection} currentPage={this.state.currentPage} language={this.state.currentLanguage} />
          <CollectionsSection currentPage={this.state.currentPage} language={this.state.currentLanguage} />
          <ContactSection currentPage={this.state.currentPage} language={this.state.currentLanguage} />
        </ReactPageScroller>
      </>
    )
  }
}

export default PromotionalPage;