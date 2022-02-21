import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/search/Search';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import userEvent from '@testing-library/user-event';

const dietaryLabels = [
  'Gluten-free',
  'Dairy-free',
  'Vegetarian',
  'Vegan',
  'Egg-free',
  'Peanut-free',
  'Tree-nut-free',
  'Shellfish-free',
  'Pork-free',
  'Kosher'
];

const cuisineLabels = [
  'Asian',
  'Caribbean',
  'Chinese',
  'East Europe',
  'French',
  'Indian',
  'Italian',
  'Japanese',
  'Mediterranean',
  'Mexican'
];


let asFragment;
beforeEach(() => {
   asFragment = render(<Provider store={store}><Search /></Provider>);
});
// snapshot
test('the Search component should render correctly', () => {
  expect(asFragment).toMatchSnapshot();
});

// tests for behaviour of react controlled inputs

test('the searchbox should be empty to start with, and updated with a user entered value', () => {
  expect(screen.getByPlaceholderText('Enter food to search')).toHaveValue('');
  fireEvent.change(screen.getByPlaceholderText('Enter food to search'), { target: { value: "bangers" } });
  expect(screen.getByPlaceholderText('Enter food to search')).toHaveValue('bangers');
});

test('the cuisine checkboxes should all start unchecked, and each be checked on a user clicking it', () => {
  cuisineLabels.forEach(label => {
  expect(screen.getByLabelText(label)).not.toBeChecked();
  userEvent.click(screen.getByLabelText(label));
  expect(screen.getByLabelText(label)).toBeChecked();
  });
});

test('the dietary restriction checkboxes should all start unchecked, and each be checked on a user clicking it', () => {
  dietaryLabels.forEach(label => {
  expect(screen.getByLabelText(label)).not.toBeChecked();
  userEvent.click(screen.getByLabelText(label));
  expect(screen.getByLabelText(label)).toBeChecked();
  });
});



