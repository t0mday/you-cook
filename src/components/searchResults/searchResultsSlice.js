import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecipes, strip } from '../../utilities/fetchRecipes';

export const getRecipes = createAsyncThunk(
  'searchResults/getRecipes',
  async (searchTerm) => {
    const response = await fetchRecipes(searchTerm);
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
    removeRecipe: (state, action) => {
      state.recipes = state.recipes.filter(recipe => recipe.uri !== action.payload.uri);
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

export const { removeRecipe } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;