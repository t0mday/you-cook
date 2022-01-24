import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRecipes} from '../components/searchResults/searchResultsSlice';



function App() {
  const dispatch = useDispatch();
  //useEffect(() => dispatch(getRecipes('chicken')), []);
  

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
