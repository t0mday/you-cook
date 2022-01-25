import {createSlice} from '@reduxjs/toolkit';

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    recipes: []
  },
  reducers: {
    addFavourite: (state, action) => {
      state.recipes.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.recipes = state.recipes.filter(recipe => recipe.uri !== action.payload);
    }
  }
});

export const selectAllFavourites = (state) => state.favourites.recipes;

export const {addFavourite, removeFavourite} = favouritesSlice.actions;

export default favouritesSlice.reducer;