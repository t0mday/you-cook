import React from 'react';
import Favourites from '../favourites/Favourites';
import SearchResults from '../searchResults/SearchResults';
import './recipes.css';

const Recipes = () => {
return (
  <div className='all-recipes'>
    <section className='favourites'>
      <h2>Favourites</h2>
      <Favourites />
    </section>
    <hr />
    <section className='searchResults'>
      <h2>Search Results</h2>
      <SearchResults />
    </section>
  </div>
);
}

export default Recipes;