import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    restrictions: [],
    cuisine: []
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state, action) => {
      state.searchTerm = '';
    },
    addRestriction: (state, action) => {
      state.restrictions.push(action.payload);
    },
    removeRestriction: (state, action) => {
      state.restrictions = state.restrictions.filter(restriction => restriction !== action.payload);
    },
    addCuisine: (state, action) => {
      state.cuisine.push(action.payload);
    },
    removeCuisine: (state, action) => {
      state.cuisine = state.cuisine.filter(type => type !== action.payload);
    }
  }
});

export const { setSearchTerm, clearSearchTerm, addRestriction, removeRestriction, addCuisine, removeCuisine } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search.searchTerm;
export const selectRestrictions = (state) => state.search.restrictions;
export const selectCuisine = (state) => state.search.cuisine;

export default searchSlice.reducer;