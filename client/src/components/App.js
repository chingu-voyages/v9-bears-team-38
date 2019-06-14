import React, {Component} from 'react';

import AddVideo from './AddVideo.js';

import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div id='app-container' title='app-container'>
        <header className='fbr dbgc'>
          <img
            src='../src/imgs/ChinguLogo.png'
            alt='Chingu Logo'
            className='logo pm0'
          />
          <h1 className='b pm0 tc main-title'>Chingu Learning Portal</h1>
        </header>
        <nav className='lbgc fbc nav'>
          <h2 className='b playlists'>Playlists</h2>
          <ul>
            <li>Chingu AMAs</li>
            <li>Tutorials</li>
            <li>Voyage 8</li>
          </ul>
        </nav>
        <main>
          <section className='most-recent' />
          <section className='other-vids' />
        </main>
      </div>
    );
  }
}
