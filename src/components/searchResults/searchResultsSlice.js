/*
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { fetchRecipes, strip } from '../../utilities/fetchRecipes';

export const getRecipes = createAsyncThunk(
  'searchResults/getRecipes',
  async ({cleanedSearchTerm, restrictions}) => {
    const response = await fetchRecipes(cleanedSearchTerm, restrictions);
    const recipes = await response.json();
    const stripped = strip(recipes);
    return stripped;
  }
);

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    addResult: (state, action) => {
      state.recipes.push(action.payload);
    },
    removeResult: (state, action) => {
      state.recipes = state.recipes.filter(recipe => recipe.uri !== action.payload);
    },
    updateShowDetails: (state, action) => {
      const recipeIndex = state.recipes.findIndex(recipe => recipe.uri === action.payload.uri);
      state.recipes[recipeIndex].showDetails = action.payload.showDetails;
    }
  },
  extraReducers: {
    [getRecipes.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.recipes = action.payload;
    },
    [getRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

export const selectAllResults = (state) => state.searchResults.recipes; 

export const { addResult, removeResult, updateShowDetails } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
*/