import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults, selectFavourites } from '../recipes/recipesSlice';
import Recipe from '../recipe/Recipe';

const SearchResults = () => {

  const results = useSelector(selectSearchResults);
  const favourites = useSelector(selectFavourites);
  // prevents recipe appearing in Search Results if it is already saved in Favourites
  const filteredResults = results.filter(recipe => !favourites.find(favourite => favourite.uri === recipe.uri));

  return (
    <div className='recipes' >
      {filteredResults.map(recipe => <Recipe className="recipe" id={recipe.uri} key={recipe.uri} />)}
    </div>
  );
}

export default SearchResults;