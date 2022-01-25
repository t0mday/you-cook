import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from './searchSlice';
import { getRecipes } from '../searchResults/searchResultsSlice';

const Search = () => {

  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedSearchTerm = searchTerm.replace(/[&]/g, " ").replace(/[^a-zA-Z ]/g, "");
    dispatch(getRecipes(cleanedSearchTerm));
    dispatch(clearSearchTerm());
  };

  return (
    <form onSubmit={handleSubmit} >
      <input name="searchField" type="text" onChange={handleChange} value={searchTerm} required />
      <button type="submit" >Search Recipes</button>
    </form>
  );
}

export default Search;