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
    currentPage: 0,
    currentLanguage: 'english'
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  }

  handleLanguageChange = language => {
    this.setState({ currentLanguage: language })
  }

  render() {
    return (
      <>
        <Pagination 
        currentPage={this.state.currentPage}
        section={(number) => this.handlePageChange(number)}/>
        <LanguageSwitcher 
        language={this.state.currentLanguage}
        languageChanger={this.handleLanguageChange}/>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <HomeSection language={this.state.currentLanguage} />
          <CollectionsSection language={this.state.currentLanguage} />
          <SeasonsSection language={this.state.currentLanguage} />
          <ContactSection language={this.state.currentLanguage} />
        </ReactPageScroller>
      </>
    )
  }
}

export default PromotionalPage;