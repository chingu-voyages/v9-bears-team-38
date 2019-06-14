import React, {Component} from 'react';

import AddVideo from './AddVideo.js';

import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div id='app-container' title='app-container'>
        <header className='fbr'>
          <img
            src='../src/imgs/ChinguLogo.png'
            alt='Chingu Logo'
            className='logo pm0'
          />
          <span className='b pm0 tc main-title'>Chingu Learning Portal</span>
        </header>
        <nav className='bgc'>
          <h3 className='b tc playlists'>Playlists</h3>
          <ul>
            <li>Chingu AMAs</li>
            <li>Tutorials</li>
            <li>Voyage 8</li>
          </ul>
        </nav>
      </div>
    );
  }
}
