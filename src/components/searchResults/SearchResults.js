import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults } from '../recipes/recipesSlice';
import Recipe from '../recipe/Recipe';

const SearchResults = () => {

  const results = useSelector(selectSearchResults);

  return (
    <div className='recipes'>
      {results.map(recipe => <Recipe className="recipe" id={recipe.uri} key={recipe.uri} />)}
    </div>
  );
}

export default SearchResults;