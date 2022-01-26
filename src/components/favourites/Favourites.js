import React from 'react';
import { useSelector } from 'react-redux';
import Recipe from '../recipe/Recipe';
import { selectFavourites } from '../recipes/recipesSlice';

const Favourites = () => {

  const favourites = useSelector(selectFavourites);

  return (
    <div className='favourites'>
      {favourites.map(recipe => <Recipe className="recipe" id={recipe.uri} key={recipe.uri} />)}
    </div>
  )
}

export default Favourites;