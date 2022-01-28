# You Cook

This project is a React App, using a Redux store.
It uses the Recipe Search API from Edamam https://www.edamam.com

It allows online recipes to be searched using keywords and allows for options to be selected for dietary restrictions and cuisine types. 

Recipe search results can be saved to a favourites section and further details for each recipe can be viewed, and it is possible to view the original recipe webpage in a new browser tab.

## App Structure

### Redux Store

* src/app/store.js
* Two state slices of recipesSlice.js and 

### React Components

* <App /> at the top level
* <Search /> and <Recipes /> at next level
* <SearchResults /> and <Favourites /> rendered by <Recipes /> 
* Individual <Recipe /> lists rendered by <SearchResults /> and <Favourites />
* Recipes can move between SearchResults and Favourites
* Clicking within a recipe brings up a <RecipeDetails /> modal
* Original online location of recipe can be reached from there

Recipes are fetched from Edamam by fetchRecipes.js in utilities
