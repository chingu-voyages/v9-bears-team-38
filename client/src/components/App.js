import React, {Component} from 'react';

import AddVideo from './AddVideo.js';

import '../styles/App.css';

export default class App extends Component {
  state = {
    showNav: false,
  };

  handleShowNav = () => {
    !!this.state.showNav
      ? this.setState({showNav: false})
      : this.setState({showNav: true});
    let carrot = document.getElementById('menu-carrot');
    carrot.classList.toggle('flip');
  };

  render() {
    return (
      <div id='app-container' title='app-container'>
        <header className='dbgc header'>
          <img
            src='../src/imgs/ChinguLogo.png'
            alt='Chingu Logo'
            className='logo pm0'
          />
          <h1 className='b pm0 tc main-title'>Chingu Learning Portal</h1>
          <input
            type='text'
            id='search'
            name='search'
            aria-label='Search'
            placeholder='Search videos ...'
          />
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
          <i
            className='fas fa-caret-square-down fa-lg'
            id='menu-carrot'
            onClick={this.handleShowNav}
          />
        </nav>
        <main className='fbc'>
          <section className='most-recent'>MOST RECENT VID</section>
          <section className='other-vids'>OTHER VIDS</section>
        </main>
        <footer>
          <p className='tc pointer'>Admin Login</p>
        </footer>
      </div>
    );
  }
}
