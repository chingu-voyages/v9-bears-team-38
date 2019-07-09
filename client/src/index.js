import React from 'react';
import {render} from 'react-dom';

import App from './components/App.js';
import {VideoContextProvider} from './components/VideoStore.js';

render(
  <VideoContextProvider>
    <App />
  </VideoContextProvider>,
  document.getElementById('root'),
);
