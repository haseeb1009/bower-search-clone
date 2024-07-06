import React from 'react'

import {
  render,
  screen,
} from '@testing-library/react'

import About from '../pages/About'

test('renders about page content', () => {
  render(<About />);
  expect(screen.getByText(/About This Project/i)).toBeInTheDocument();
  expect(screen.getByText(/Assumptions/i)).toBeInTheDocument();
  expect(screen.getByText(/Setup and Running/i)).toBeInTheDocument();
});
