import React from 'react';
import { useDispatch } from 'react-redux';
import { updateShowDetails } from '../searchResults/searchResultsSlice';
import './recipeDetails.css';

const RecipeDetails = ({recipe}) => {

  const dispatch = useDispatch();
  const payload = {uri: recipe.uri, showDetails: false};

  const handleClose = () => {
    dispatch(updateShowDetails(payload));
  }

  return (
    <div className='recipe-details'>
      <button className='close' onClick={handleClose} >X</button>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <h3>Ingredients</h3>
      <div className='details'>
        <div className='ingredients'>
          {recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
        </div>
        <div className='location'>
          <p>Recipe by <span>{recipe.source}</span></p>
          <a href={recipe.url} target="_blank" rel='noreferrer' >{recipe.url}</a>
        </div>
      </div>
      <div className='email'>
        <button >Add to email</button>
      </div>
    </div>
  );
}

export default RecipeDetails;