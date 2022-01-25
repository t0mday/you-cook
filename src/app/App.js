import React from 'react';
import './App.css';
import attribution from './Edamam_Badge_Transparent.svg';
import Search from '../components/search/Search';
import SearchResults from '../components/searchResults/SearchResults';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>you Cook</h1>
      </header>
      <section className='favourites'>
        <Search />
      </section>
      <section className='search'>
        {/*<Favourites />*/}
      </section>
      <section className='searchResults'>
        <SearchResults />
      </section>
      <footer>
        <img src={attribution} alt="powered by Edamam" />
      </footer>
    </div>
  );
}

export default App;
