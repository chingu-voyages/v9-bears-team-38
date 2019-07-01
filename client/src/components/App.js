import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';
import escapeRegExp from 'escape-string-regexp';

import {VideoContext} from './VideoStore.js';
import AddVideo from './AddVideo.js';
import DisplayedVids from './DisplayedVids.js';

import '../styles/App.css';

class App extends Component {
  state = {
    showNav: false,
    showTray: false,
    displayedVideos: [],
    searchQuery: '',
  };

  handleSearchInput = e => {
    //Search input goes through state
    this.setState({searchQuery: e.target.value});
  };

  handleSearch = () => {
    const match = new RegExp(escapeRegExp(this.state.searchQuery), 'i');
    const searchResults = this.state.videos.filter(video => {
      if (match.test(video.title) || match.test(video.tags) === true) {
        return true;
      }
    });
    this.setState({displayedVideos: searchResults});
  };

  handleSearchKeyUp = e => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  handleShowTray = () => {
    //Toggles showing the "tray" on mobile
    !!this.state.showTray
      ? this.setState({showTray: false})
      : this.setState({showTray: true});
  };

  handleShowNav = () => {
    //Toggles showing the playlist menu on mobile
    !!this.state.showNav
      ? this.setState({showNav: false})
      : this.setState({showNav: true});
  };

  render() {
    return (
      <div id='app-container' className='pm0' title='app-container'>
        <header className='dbgc header'>
          <img
            src='../src/imgs/ChinguLogo.png'
            alt='Chingu Logo'
            className='logo pm0'
          />
          <h1 className='b pm0 tc main-title'>Chingu Learning Portal</h1>
          <div className={!!this.state.showTray ? 'tray show-tray' : 'tray'}>
            <i className='fas fa-chevron-left' onClick={this.handleShowTray} />
            <div className='search-box'>
              <input
                type='text'
                id='search'
                name='search'
                aria-label='Search'
                placeholder='Search videos ...'
                onChange={this.handleSearchInput}
                onKeyUp={this.handleSearchKeyUp}
              />
              <i
                className='fas fa-search pointer'
                onClick={this.handleSearch}
              />
            </div>
            <p className='tc pointer tp1' onClick={this.handleShowNav}>
              Playlists
            </p>
            <p className='tc pointer tp2'>Admin</p>
          </div>
        </header>
        <nav
          className={
            !!this.state.showNav ? 'lbgc fbc nav show-nav' : 'lbgc fbc nav'
          }>
          <h2 className='b playlists'>Playlists</h2>
          <ul>
            <li className='pointer'>Chingu AMAs</li>
            <li className='pointer'>Tutorials</li>
            <li className='pointer'>Voyage 8</li>
          </ul>
        </nav>
        <main className='fbc'>
          <DisplayedVids vids={this.state.displayedVideos} />
        </main>
        <footer>
          <p className='tc pointer'>Admin Login</p>
        </footer>
      </div>
    );
  }
}

export default hot(App);
