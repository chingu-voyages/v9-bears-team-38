import React, {Component, useContext} from 'react';
import {hot} from 'react-hot-loader/root';

import {VideoContext} from './VideoStore.js';
import Nav from './Nav.js';
import Search from './Search.js';
import Login from './Login.js';
import DisplayedVids from './DisplayedVids.js';
import Admin from './Admin.js';

import '../styles/App.css';

class App extends Component {
  state = {
    showNav: false,
    showTray: false,
    showLogin: false,
    showAdmin: false,
    searchQuery: '',
    currentVid: 0,
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

  //Closes Nav
  handleCloseNav = () => {
    this.setState({showNav: false});
  };

  //Toggles showing the Login form
  handleShowLogin = () => {
    !!this.state.showLogin
      ? this.setState({showLogin: false})
      : this.setState({showLogin: true});
  };

  //Toggles showing the Login form
  handleShowAdmin = () => {
    !!this.state.showAdmin
      ? this.setState({showAdmin: false})
      : this.setState({showAdmin: true});
  };

  handleMainVidToZero = pos => {
    this.setState({currentVid: pos});
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
            <i
              className='fas fa-grip-lines-vertical'
              onClick={this.handleShowTray}
            />
            <Search />
            <p className='tc pointer tp1' onClick={this.handleShowNav}>
              Playlists
            </p>
            {!!this.context.state.user ? (
              <p className='tc pointer tp2' onClick={this.handleShowAdmin}>
                Admin
              </p>
            ) : (
              <p className='tc pointer tp2' onClick={this.handleShowLogin}>
                Login
              </p>
            )}
          </div>
        </header>
        <Nav
          showNav={this.state.showNav}
          closeNav={this.handleCloseNav}
          setCurrentVid={this.handleMainVidToZero}
        />
        <Login
          showLogin={this.state.showLogin}
          handleShowLogin={this.handleShowLogin}
        />
        {!!this.state.showAdmin && (
          <Admin handleShowAdmin={this.handleShowAdmin} />
        )}
        <main className='fbc'>
          {!this.state.showAdmin && (
            <DisplayedVids
              currentVid={this.state.currentVid}
              setCurrentVid={this.handleMainVidToZero}
            />
          )}
          <aside className='scroll-indicator'>
            <p className='pm0'>scroll</p>
            <i className='fas fa-chevron-down' />
          </aside>
        </main>
      </div>
    );
  }
}

App.contextType = VideoContext;
export default hot(App);
