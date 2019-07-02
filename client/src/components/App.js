import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';

import {VideoContext} from './VideoStore.js';
import Nav from './Nav.js';
import Search from './Search.js';
import Login from './Login.js';
import DisplayedVids from './DisplayedVids.js';

import '../styles/App.css';

class App extends Component {
  state = {
    showNav: false,
    showTray: false,
    showLogin: false,
    searchQuery: '',
  };

  //Toggles showing the "tray" on mobile
  handleShowTray = () => {
    !!this.state.showTray
      ? this.setState({showTray: false})
      : this.setState({showTray: true});
  };

  //Toggles showing the playlist menu on mobile
  handleShowNav = () => {
    !!this.state.showNav
      ? this.setState({showNav: false})
      : this.setState({showNav: true});
  };

  //Toggles showing the Login form
  handleShowLogin = () => {
    !!this.state.showLogin
      ? this.setState({showLogin: false})
      : this.setState({showLogin: true});
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
            <Search />
            <p className='tc pointer tp1' onClick={this.handleShowNav}>
              Playlists
            </p>
            <p className='tc pointer tp2' onClick={this.handleShowLogin}>
              Login
            </p>
          </div>
        </header>
        <Nav showNav={this.state.showNav} />
        <Login showLogin={this.state.showLogin} />
        <main className='fbc'>
          <DisplayedVids vids={this.state.displayedVideos} />
        </main>
        <footer />
      </div>
    );
  }
}

export default hot(App);
