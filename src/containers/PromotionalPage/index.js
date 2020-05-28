import React, { Component } from 'react';
import UAParser from 'ua-parser-js';
import ReactPageScroller from 'react-page-scroller';
import Fullscreen from "react-full-screen";

import HomeSection from './sections/HomeSection';
import CollectionsSection from './sections/CollectionsSection';
import SeasonsSection from './sections/SeasonsSection';
import ContactSection from './sections/ContactSection';

import LanguageSwitcher from './components/LanguageSwitcher';
import Pagination from './components/Pagination';
import MobileFullScreen from './components/MobileFullscreen';

import BearLogo from '../../assets/svgs/Bear.svg';
import './styles.scss';

class PromotionalPage extends Component {

  componentDidMount() {
    let system = new UAParser();
    this.setState({
      device: system.getDevice().type
    });
  }

  state = {
    currentPage: 0,
    currentLanguage: 'english',
    seasonsSection: 0,
    device: '',
    isFull: false
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
    let example = this.state.device === 'mobile' ?
      <MobileFullScreen language={this.state.currentLanguage} hide={this.state.isFull} setFull={() => this.setState({ isFull: true })} /> : null
    return (
      <>
        <Fullscreen enabled={this.state.isFull}>
          {example}
          <img className="BearLogo" src={BearLogo} alt="Bear Logo"
            style={{ opacity: this.state.currentPage === 1 ? 1 : this.state.currentPage === 2 ? 1 : 0 }} />
          <Pagination
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
            <SeasonsSection handleSection={(number) => this.seasonsSectionHandler(number)} season={this.state.seasonsSection} currentSection={this.state.seasonsSection} currentPage={this.state.currentPage} language={this.state.currentLanguage} />
            <CollectionsSection season={this.state.seasonsSection} currentPage={this.state.currentPage} language={this.state.currentLanguage} />
            <ContactSection season={this.state.seasonsSection} currentPage={this.state.currentPage} language={this.state.currentLanguage} />
          </ReactPageScroller>
        </Fullscreen>
      </>
    )
  }
}

export default PromotionalPage;