import React from 'react';
import './App.css';
import attribution from './Edamam_Badge_Transparent.svg';
//import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';
//import { getRecipes} from '../components/searchResults/searchResultsSlice';



function App() {
  //const dispatch = useDispatch();
  //useEffect(() => dispatch(getRecipes('chicken')), []);
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>you Cook</h1>
      </header>
      <section className='favourites'>
        {/*<Favourites />*/}
      </section>
      <section className='search'>
        {/*<Search />*/}
      </section>
      <section className='searchResults'>
        {/*<SearchResults />*/}
      </section>
      <footer>
        <img src={attribution} alt="powered by Edamam" />
      </footer>
    </div>
  );
}

export default App;
