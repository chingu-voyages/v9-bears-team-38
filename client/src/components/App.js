import React, {Component} from 'react';

import AddVideo from './AddVideo.js';

import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div title='app-container'>
        <h1>Chingu Video Portal</h1>
        <AddVideo />
      </div>
    );
  }
}
