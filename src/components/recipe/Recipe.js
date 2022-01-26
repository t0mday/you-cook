import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResult, removeResult, updateShowDetails } from '../searchResults/searchResultsSlice';
import { addFavourite, removeFavourite } from '../favourites/favouritesSlice';
import RecipeDetails from '../recipeDetails/RecipeDetails';

const Recipe = ({ data, favourite }) => {

  const dispatch = useDispatch();

  const toggleFavourite = () => {
    if(favourite) {
      dispatch(addResult(data));
      dispatch(removeFavourite(data.uri));
    } else {
      dispatch(addFavourite(data));
      dispatch(removeResult(data.uri));
    }
  }
  const selected = useSelector(state => state.searchResults.recipes.filter(recipe => recipe.uri === data.uri));
  const recipe = selected[0];

  
  const showRecipeDetails = () => {
    console.log(recipe.showDetails);

    const payload = {uri: recipe.uri, showDetails: true};
 
  

    dispatch(updateShowDetails(payload));
    console.log(recipe.showDetails);
  }


  return (
    <div className='recipe'>
      <div className={recipe.showDetails ? 'show' : 'noShow'} >
        <RecipeDetails recipe={recipe} />
      </div>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} />
      <button className='toggleFavourite' onClick={toggleFavourite} >{favourite ? 'Remove favourite': 'Add to favourites'}</button>
      <button className='showDetails' onClick={showRecipeDetails} >See more details</button>
    </div>
  );
}

export default Recipe;