import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../components/recipes/recipesSlice';
import searchReducer from '../components/search/searchSlice';


export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    search: searchReducer
  }
});
