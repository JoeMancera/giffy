import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
// eslint-disable-next-line jest/no-mocks-import
import '../__mocks__/intersectionObserverMock'

test('Renders without crashing', async() => {
  const {findByText} = render(<App />);
  const text = await findByText(/Gifs/i);
  expect(text).toBeInTheDocument();
});

test('Search form could be used', async() => {
  render(<App />);
  const searchInput = await screen.getByRole('textbox');

  fireEvent.change(searchInput, {target: {value: 'Avengers'}});
  fireEvent.submit(searchInput);

  const text = await screen.findByText(/Avengers/i);
  expect(text).toBeVisible();
});