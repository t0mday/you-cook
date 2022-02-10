import React from 'react';
import { render } from '@testing-library/react';
import App from '../app/App';
import { store } from '../../src/app/store';
import { Provider } from 'react-redux';


test('renders correctly', () => {
  const { asFragment } = render(<Provider store={store}><App /></Provider>);
  expect(asFragment()).toMatchSnapshot();
});