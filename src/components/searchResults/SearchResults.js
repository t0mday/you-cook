import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllResults } from './searchResultsSlice';
import Recipe from '../recipe/Recipe';

const SearchResults = () => {

  const results = useSelector(selectAllResults);

  return (
    <div className='recipes'>
      {results.map(recipe => <Recipe favourite={false} data={recipe} key={recipe.uri} />)}
    </div>
  );
}

export default SearchResults;