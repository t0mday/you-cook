import reducer, { setSearchTerm, clearSearchTerm, addRestriction, removeRestriction, addCuisine, removeCuisine } from '../components/search/searchSlice';

const initialState = {
  searchTerm: '',
  cuisine: [],
  restrictions: []
}

test('should return an empty initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should handle a searchTerm being entered', () => {
  const searchTerm = 'bangers and mash';
  const newState = {
    ...initialState, 
    searchTerm: searchTerm
  };
  expect(reducer(initialState, setSearchTerm(searchTerm))).toEqual(newState);
});

test('should handle a searchTerm being cleared', () => {
  const previousState = {
    ...initialState,
    searchTerm: 'lemons'
  };
  expect(reducer(previousState, clearSearchTerm())).toEqual(initialState);
});

test('should handle a restriction being added', () => {
  const newState = {
    ...initialState,
    restrictions: [...initialState.restrictions, 'dairy-free']
  };
  expect(reducer(initialState, addRestriction('dairy-free'))).toEqual(newState);
});

test('should handle a restriction being removed', () => {
  const previousState = {
    ...initialState,
    restrictions: [...initialState.restrictions, 'dairy-free']
  };
  expect(reducer(previousState, removeRestriction('dairy-free'))).toEqual(initialState);
});

test('should handle a cuisine being added', () => {
  const newState = {
    ...initialState,
    cuisine: [...initialState.cuisine, 'French']
  };
  expect(reducer(initialState, addCuisine('French'))).toEqual(newState);
});

test('should handle a cuisine being removed', () => {
  const previousState = {
    ...initialState,
    cuisine: [...initialState.cuisine, 'French']
  };
  expect(reducer(previousState, removeCuisine('French'))).toEqual(initialState);
});