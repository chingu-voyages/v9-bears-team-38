import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App.js';

import {render, fireEvent} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

const {axe} = require('jest-axe');
//
// test('it renders App', () => {
//   const {getByTitle, debug} = render(<App />);
//   const app = getByTitle('app-container');
//   /* debug can be pulled from render and dropped into your test
//   to log the DOM at the point the debug is ran. Perfect for seeing
//   what the DOM looks like before your assertions. */
//   // debug();
//   expect(app).toBeInTheDocument();
// });

// test('it renders a header', () => {
//   const {container} = render(<App />);
//   const header = document.querySelector('header');
//   expect(header).toBeInTheDocument();
// });

test('placebo', () => {});
