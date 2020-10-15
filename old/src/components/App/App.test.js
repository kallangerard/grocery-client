import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders lorem ipsum', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Lorem, ipsum dolor sit amet consectetur/i);
  expect(linkElement).toBeInTheDocument();
});

