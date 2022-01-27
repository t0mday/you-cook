import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, clearSearchTerm, selectSearchTerm, addRestriction, removeRestriction, selectRestrictions } from './searchSlice';
import { getRecipes } from '../recipes/recipesSlice';
import './search.css';

const Search = () => {

  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const restrictions = useSelector(selectRestrictions);
  const gf = restrictions.includes('gluten-free');
  const df = restrictions.includes('dairy-free');
  const veggie = restrictions.includes('vegetarian');
  const vegan = restrictions.includes('vegan');

   const handleInput = ({target}) => {
    dispatch(setSearchTerm(target.value));
  };

  const handleCheck = ({target}) => {
    target.checked ? dispatch(addRestriction(target.id)) : dispatch(removeRestriction(target.id));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedSearchTerm = searchTerm.replace(/[&]/g, " ").replace(/[^a-zA-Z ]/g, "");
    dispatch(getRecipes({cleanedSearchTerm, restrictions}));
    dispatch(clearSearchTerm());
  };

  return (
    <div className='test'>
      <h2>Find Recipes</h2>
    <form onSubmit={handleSubmit} >
      <input name="searchField" type="text" onChange={handleInput} value={searchTerm} placeholder='Enter search term food item(s)' required />
      <input id="gluten-free" type="checkbox" checked={gf} onChange={handleCheck} />
      <label htmlFor="gluten-free">Gluten-free</label>
      <input id="dairy-free" type="checkbox" checked={df} onChange={handleCheck} />
      <label htmlFor="dairy-free">Dairy-free</label>
      <input id="vegetarian" type="checkbox" checked={veggie} onChange={handleCheck} />
      <label htmlFor="vegetarian">Vegetarian</label>
      <input id="vegan" type="checkbox" checked={vegan} onChange={handleCheck} />
      <label htmlFor="vegan">Vegan</label>
      <button type="submit" >Search Recipes</button>
    </form>
    </div>
  );
}

export default Search;