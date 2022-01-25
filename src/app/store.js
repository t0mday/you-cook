import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../components/searchResults/searchResultsSlice';
import favouritesReducer from '../components/favourites/favouritesSlice';
import searchReducer from '../components/search/searchSlice';


export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    searchResults: searchResultsReducer,
    search: searchReducer
  }
});
