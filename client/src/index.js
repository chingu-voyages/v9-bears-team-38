import React from 'react';
import {render} from 'react-dom';

import {AppContainer} from 'react-hot-loader';
import App from './components/App.js';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    const NextApp = require('./components/App.js').default;
    render(<NextApp />, document.getElementById('root'));
  });
}
