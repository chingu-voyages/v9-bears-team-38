import React from 'react';
import ReactDOM from 'react-dom';

import AddVideo from '../components/AddVideo.js';

import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

const {axe} = require('jest-axe');

//Jest-Axe test to help judge if HTML output is accessible
test('form is accessible', async () => {
  const div = document.createElement('div');
  const {container} = render(<AddVideo />, {container: div});
  const results = await axe(container.innerHTML);
  expect(results).toHaveNoViolations();
});
