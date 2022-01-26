import React from 'react';
import Favourites from '../favourites/Favourites';
import SearchResults from '../searchResults/SearchResults';

const Recipes = () => {
return (
  <div className='recipes'>
    <section className='favourites'>
      <h2>Favourites</h2>
      <Favourites />
    </section>
    <br />
    <hr />
    <br />
    <section className='searchResults'>
      <h2>Search Results</h2>
      <SearchResults />
    </section>
  </div>
);
}

export default Recipes;