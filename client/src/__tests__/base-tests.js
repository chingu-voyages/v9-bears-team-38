import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

const {axe} = require('jest-axe');

test('it renders App', () => {
  const {getByTitle, debug} = render(<App />);
  const app = getByTitle('app-container');
  /* debug can be pulled from render and dropped into your test
  to log the DOM at the point the debug is ran. Perfect for seeing
  what the DOM looks like before your assertions. */
  debug();
  expect(app).toBeInTheDocument();
});

//Jest-Axe test to help judge if HTML output is accessible
test('is is accessible', async () => {
  const {container} = render(<App />);
  expect(await axe(container.innerHTML)).toHaveNoViolations();
});
