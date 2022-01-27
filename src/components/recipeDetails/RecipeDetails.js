import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleShowDetails } from '../recipes/recipesSlice';
import './recipeDetails.css';

const RecipeDetails = ({recipe}) => {

  const uri = recipe.uri;
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleShowDetails(uri));
  }

  return (
    <div>
      <button className='close' onClick={handleClose} >X</button>
      <div className='recipe-details'>
        <h2>{recipe.name}</h2>
        <p>Recipe by <span>{recipe.source}</span></p>
        <a href={recipe.url} target="_blank" rel='noreferrer' >{recipe.url}</a>
        <img src={recipe.image} alt={recipe.name} />
        <div className='ingredients'>
          <h3>Ingredients</h3>
          {recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;