import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllResults, addResult, removeResult } from '../searchResults/searchResultsSlice';
import { addFavourite, removeFavourite } from '../favourites/favouritesSlice';

const Recipe = ({ data, favourite }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    if(favourite) {
      dispatch(addResult(data));
      dispatch(removeFavourite(data.uri));
    } else {
      dispatch(addFavourite(data));
      dispatch(removeResult(data.uri));
    }
  }

  return (
    <div className='recipe'>
      <h3>{data.name}</h3>
      <h4>Ingredients</h4>
      <img src={data.image} alt={data.name} />
      <div className='ingredients'>
        {data.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
      </div>
      <button className='toggleFavourite' onClick={handleClick} >{favourite ? 'Remove favourite': 'Add to favourites'}</button>
    </div>
  );
}

export default Recipe;