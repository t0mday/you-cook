import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  setSearchTerm, 
  clearSearchTerm, 
  selectSearchTerm, 
  addRestriction, 
  removeRestriction,
  addCuisine,
  removeCuisine, 
  selectRestrictions,
  selectCuisine 
} from './searchSlice';
import { getRecipes, selectSearchResults } from '../recipes/recipesSlice';
import './search.css';

const Search = () => {

  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const restrictions = useSelector(selectRestrictions);
  const cuisine = useSelector(selectCuisine);

  const gf = restrictions.includes('gluten-free');
  const df = restrictions.includes('dairy-free');
  const veggie = restrictions.includes('vegetarian');
  const vegan = restrictions.includes('vegan');
  const ef = restrictions.includes('egg-free');
  const pnf = restrictions.includes('peanut-free');
  const tnf = restrictions.includes('tree-nut-free');
  const sf = restrictions.includes('shellfish-free');
  const pf = restrictions.includes('pork-free');
  const kosh = restrictions.includes('kosher');

  const asi = cuisine.includes('Asian');
  const car = cuisine.includes('Caribbean');
  const chi = cuisine.includes('Chinese');
  const eas = cuisine.includes('Eastern Europe');
  const fre = cuisine.includes('French');
  const ind = cuisine.includes('Indian');
  const ita = cuisine.includes('Italian');
  const jap = cuisine.includes('Japanese');
  const med = cuisine.includes('Mediterranean');
  const mex = cuisine.includes('Mexican');

  const results = useSelector(selectSearchResults);
  const showPrompt = results.length > 0 ? true : false;
  console.log(showPrompt);
  
  const handleInput = ({target}) => {
    dispatch(setSearchTerm(target.value));
  };

  const handleRestrictionsCheck = ({target}) => {
    target.checked ? dispatch(addRestriction(target.id)) : dispatch(removeRestriction(target.id));
  }

  const handleCuisineCheck = ({target}) => {
    target.checked ? dispatch(addCuisine(target.id)) : dispatch(removeCuisine(target.id));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedSearchTerm = searchTerm.replace(/[&]/g, " ").replace(/[^a-zA-Z ]/g, "");
    dispatch(getRecipes({cleanedSearchTerm, restrictions, cuisine}));
    dispatch(clearSearchTerm());
  };

  return (
    <form onSubmit={handleSubmit} >
      <input id="searchField" name="searchField" type="text" onChange={handleInput} value={searchTerm} placeholder='Enter food to search' required />
      <button type="submit" >Search Recipes</button>
      <p className={showPrompt ? 'showPrompt' : 'noShowPrompt'}>Scroll down to see results</p>
      <div className="checkboxes">
        <fieldset className="restrictions">
          <legend>Restrictions</legend>
          <label htmlFor="gluten-free">
            <input id="gluten-free" type="checkbox" checked={gf} onChange={handleRestrictionsCheck} />
            Gluten-free
          </label>
          <label htmlFor="dairy-free">
            <input id="dairy-free" type="checkbox" checked={df} onChange={handleRestrictionsCheck} />
            Dairy-free
          </label>
          <label htmlFor="vegetarian">
            <input id="vegetarian" type="checkbox" checked={veggie} onChange={handleRestrictionsCheck} />
            Vegetarian
          </label>
          <label htmlFor="vegan">
            <input id="vegan" type="checkbox" checked={vegan} onChange={handleRestrictionsCheck} />
            Vegan
          </label>
          <label htmlFor="egg-free">
            <input id="egg-free" type="checkbox" checked={ef} onChange={handleRestrictionsCheck} />
            Egg-free
          </label>
          <label htmlFor="peanut-free">
            <input id="peanut-free" type="checkbox" checked={pnf} onChange={handleRestrictionsCheck} />
            Peanut-free
          </label>
          <label htmlFor="tree-nut-free">
            <input id="tree-nut-free" type="checkbox" checked={tnf} onChange={handleRestrictionsCheck} />
            Tree-nut-free
          </label>
          <label htmlFor="shellfish-free">
            <input id="shellfish-free" type="checkbox" checked={sf} onChange={handleRestrictionsCheck} />
            Shellfish-free
          </label>
          <label htmlFor="pork-free">
            <input id="pork-free" type="checkbox" checked={pf} onChange={handleRestrictionsCheck} />
            Pork-free
          </label>
          <label htmlFor="kosher">
            <input id="kosher" type="checkbox" checked={kosh} onChange={handleRestrictionsCheck} />
            Kosher
          </label>
        </fieldset>
        <fieldset className='cuisine'>
          <legend>Cuisine</legend>
          <label htmlFor="Asian">
            <input id="Asian" type="checkbox" checked={asi} onChange={handleCuisineCheck} />
            Asian
          </label>
          <label htmlFor="Caribbean">
            <input id="Caribbean" type="checkbox" checked={car} onChange={handleCuisineCheck} />
            Caribbean
          </label>
          <label htmlFor="Chinese">
            <input id="Chinese" type="checkbox" checked={chi} onChange={handleCuisineCheck} />
            Chinese
          </label>
          <label htmlFor="Eastern Europe">
            <input id="Eastern Europe" type="checkbox" checked={eas} onChange={handleCuisineCheck} />
            East Europe
          </label>
          <label htmlFor="French">
            <input id="French" type="checkbox" checked={fre} onChange={handleCuisineCheck} />
            French
          </label>
          <label htmlFor="Indian">
            <input id="Indian" type="checkbox" checked={ind} onChange={handleCuisineCheck} />
            Indian
          </label>
          <label htmlFor="Italian">
            <input id="Italian" type="checkbox" checked={ita} onChange={handleCuisineCheck} />
            Italian
          </label>
          <label htmlFor="Japanese">
            <input id="Japanese" type="checkbox" checked={jap} onChange={handleCuisineCheck} />
            Japanese
          </label>
          <label htmlFor="Mediterranean">
            <input id="Mediterranean" type="checkbox" checked={med} onChange={handleCuisineCheck} />
            Mediterranean
          </label>
          <label htmlFor="Mexican">
            <input id="Mexican" type="checkbox" checked={mex} onChange={handleCuisineCheck} />
            Mexican
          </label>
        </fieldset>
      </div>
    </form>
  );
}

export default Search;