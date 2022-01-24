export const fetchRecipes = async (searchTerm) => {
    const endpoint = 'https://api.edamam.com/api/recipes/v2';
    const appId = '42b8711c';
    const appKey = '0d2bd2389564a86b6295767e677d725d';
    const url = endpoint + '?type=public&q=' + searchTerm + '&app_id=' + appId + '&app_key=' + appKey; 
    const response = await fetch(url);
    return response;
}

export const strip = (data) => {
  return data.hits.map(hit => ({
    name: hit.recipe.label,
    uri: hit.recipe.uri.match(/recipe_([\S]+)/)[1],
    url: hit.recipe.url,
    image: hit.recipe.image,
    source: hit.recipe.source,
    healthLabels: hit.recipe.healthLabels,
    ingredients: hit.recipe.ingredientLines,
    details: false
  }));
}
