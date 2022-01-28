import React from 'react';
import './App.css';
import attribution from './Edamam_Badge_Transparent.svg';
import Search from '../components/search/Search';
import Recipes from '../components/recipes/Recipes';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='banner'>
          <h1>You Cook</h1>
        </div>
      </header>
      <section className='search'>
        <h2>Find Recipes</h2>
        <Search />
      </section>
      <hr />
      <Recipes />
      <footer>
        <img src={attribution} alt="powered by Edamam" />
        <p>&copy; Tom Day 2022</p>
      </footer>
    </div>
  );
}

export default App;
