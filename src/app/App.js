import React from 'react';
import './App.css';
import attribution from './Edamam_Badge_Transparent.svg';
import Search from '../components/search/Search';
import Recipes from '../components/recipes/Recipes';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='title'>
          <h1>you Cook</h1>
        </div>
      </header>
      <section className='search'>
        <input type='color'></input>
        <h2>Find Recipes</h2>
        <Search />
      </section>
      <br />
      <hr />
      <br />
      <Recipes />
      <footer>
        <img src={attribution} alt="powered by Edamam" />
      </footer>
    </div>
  );
}

export default App;
