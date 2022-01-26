import React from 'react';
import { useSelector } from 'react-redux';
import Recipe from '../recipe/Recipe';
import { selectAllFavourites } from './favouritesSlice';

const Favourites = () => {

  const favourites = useSelector(selectAllFavourites);

  return (
    <div className='favourites'>
      {favourites.map(recipe => <Recipe className="recipe" favourite={true} data={recipe} key={recipe.uri} />)}
    </div>
  )
}

export default Favourites;