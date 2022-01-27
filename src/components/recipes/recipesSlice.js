import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecipes, strip } from '../../utilities/fetchRecipes';

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async ({cleanedSearchTerm, restrictions, cuisine}) => {
    const response = await fetchRecipes(cleanedSearchTerm, restrictions, cuisine);
    const json = await response.json();
    const stripped = strip(json);
    return stripped;
  }
);

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const recipeIndex = state.recipes.findIndex(recipe => recipe.uri === action.payload);
      state.recipes[recipeIndex].favourite = !state.recipes[recipeIndex].favourite;
    },
    toggleShowDetails: (state, action) => {
      const recipeIndex = state.recipes.findIndex(recipe => recipe.uri === action.payload);
      state.recipes[recipeIndex].showDetails = !state.recipes[recipeIndex].showDetails;
    }
  },
  extraReducers: {
    [getRecipes.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
      state.recipes = state.recipes.filter(recipe => recipe.favourite === true);
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.recipes = state.recipes.concat(action.payload);
    },
    [getRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

export const selectSearchResults = (state) => state.recipes.recipes.filter(recipe => recipe.favourite === false);
export const selectFavourites = (state) => state.recipes.recipes.filter(recipe => recipe.favourite === true);
export const selectForEmail = (state) => state.recipes.recipes.filter(recipe => recipe.email === true);

export const { toggleFavourite, toggleShowDetails, toggleEmail } = recipesSlice.actions;

export default recipesSlice.reducer;

