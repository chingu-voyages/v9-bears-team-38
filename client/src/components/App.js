import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';
import escapeRegExp from 'escape-string-regexp';

import AddVideo from './AddVideo.js';
import GetVids from './GetVids.js';

import '../styles/App.css';

class App extends Component {
  state = {
    showNav: false,
    showTray: false,
    displayedVideos: null,
    searchQuery: '',
  };

  componentDidMount() {
    //Fetch all videos
    fetch('http://localhost:8000/api/getvid', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(videos => {
        console.log(videos);
        this.setState({videos});
      });
  }

  handleSearchInput = e => {
    //Search input goes through state
    e.preventDefault();
    this.setState({searchQuery: e.target.value});
  };

  handleSearch = query => {
    const match = new RegExp(escapeRegExp(query), 'i');
    const searchResults = this.state.videos.filter(video => {
      match.test(video.title);
    });
    this.setState({displayedVideos: searchResults});
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
              />
              <i className='fas fa-search pointer' />
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
          <GetVids vids={this.state.videos} />
        </main>
        <footer>
          <p className='tc pointer'>Admin Login</p>
        </footer>
      </div>
    );
  }
}

export default hot(App);
