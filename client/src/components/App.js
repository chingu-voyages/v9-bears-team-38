import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';

import AddVideo from './AddVideo.js';
import GetVids from './GetVids.js';

import '../styles/App.css';

class App extends Component {
  state = {
    showNav: false,
    showTray: false,
  };

  handleShowTray = () => {
    !!this.state.showTray
      ? this.setState({showTray: false})
      : this.setState({showTray: true});
  };

  handleShowNav = () => {
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
            <input
              type='text'
              id='search'
              name='search'
              aria-label='Search'
              placeholder='Search videos ...'
            />
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
            <li>Chingu AMAs</li>
            <li>Tutorials</li>
            <li>Voyage 8</li>
          </ul>
        </nav>
        <main className='fbc'>
          <GetVids />
        </main>
        <footer>
          <p className='tc pointer'>Admin Login</p>
        </footer>
      </div>
    );
  }
}

export default hot(App);
