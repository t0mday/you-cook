import React from 'react';
import './recipe.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite, toggleShowDetails, toggleEmail } from '../recipes/recipesSlice';
import RecipeDetails from '../recipeDetails/RecipeDetails';

const Recipe = ({id}) => {

  const thisRecipe = useSelector(state => state.recipes.recipes.filter(recipe => recipe.uri === id));
  const recipe = thisRecipe[0];
  const uri = recipe.uri;
  const favourite = recipe.favourite;
  const showDetails = recipe.showDetails;
  
  const dispatch = useDispatch();

  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(uri));
  }

  const handleToggleShowDetails = () => {
    dispatch(toggleShowDetails(uri));
  }

  return (
    <div className='recipe'>
      <div className={showDetails ? 'show' : 'noShow'} >
        <RecipeDetails recipe={recipe} />
      </div>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} />
      <button className='toggleFavourite' onClick={handleToggleFavourite} >{favourite ? 'Remove favourite': 'Add to favourites'}</button>
      <button className='showDetails' onClick={handleToggleShowDetails} >See more details</button>
    </div>
  );
}

export default Recipe;