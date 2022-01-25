import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllResults } from './searchResultsSlice';

const SearchResults = () => {

  const results = useSelector(selectAllResults);

  return results.map(recipe => <li key={recipe.uri}>{recipe.name}</li>);

}

export default SearchResults;