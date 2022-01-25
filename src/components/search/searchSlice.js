import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    restrictions: []
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
    }
  }
});

export const { setSearchTerm, clearSearchTerm, addRestriction, removeRestriction } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search.searchTerm;
export const selectRestrictions = (state) => state.search.restrictions;

export default searchSlice.reducer;