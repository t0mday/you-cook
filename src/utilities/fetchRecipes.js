
export const fetchRecipes = async (searchTerm, restrictions, cuisine) => {
    const endpoint = 'https://api.edamam.com/api/recipes/v2';
    const appId = '42b8711c';
    const appKey = '0d2bd2389564a86b6295767e677d725d';
    let restrictionsString = '';
    let cuisineString = '';
    restrictions.forEach(restriction => restrictionsString += `&health=${restriction}`);
    cuisine.forEach(type => cuisineString += `&cuisineType=${type}`);
    const url = endpoint + '?type=public&q=' + searchTerm + '&app_id=' + appId + '&app_key=' + appKey + restrictionsString + cuisineString;
    const response = await fetch(url);
    return response;
}

export const strip = (data) => {
  return data.hits.map(hit => ({
    name: hit.recipe.label,
    uri: hit.recipe.uri.match(/recipe_([\S]+)/)[1],
    image: hit.recipe.image,
    source: hit.recipe.source,
    url: hit.recipe.url,
    ingredients: hit.recipe.ingredientLines,
    favourite: false,
    showDetails: false,
  }));
}