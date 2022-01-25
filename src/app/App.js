import React from 'react';
import './App.css';
import attribution from './Edamam_Badge_Transparent.svg';
import Search from '../components/search/Search';
import SearchResults from '../components/searchResults/SearchResults';
import Favourites from '../components/favourites/Favourites';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>you Cook</h1>
      </header>
      <section className='search'>
        <h2>Find Recipes</h2>
        <Search />
      </section>
      <br />
      <hr />
      <br />
      <section className='favourites'>
        <h2>Favourites</h2>
        {<Favourites />}
      </section>
      <br />
      <hr />
      <br />
      <section className='searchResults'>
        <h2>Search Results</h2>
        <SearchResults />
      </section>
      <footer>
        <img src={attribution} alt="powered by Edamam" />
      </footer>
    </div>
  );
}

export default App;
