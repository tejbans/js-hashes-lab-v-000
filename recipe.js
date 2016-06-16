'use strict';

function addIngredient(recipe, ingredientname, amount){
  recipe[ingredientname] = amount
  return recipe
}

function removeIngredient(recipe,ingredientname){
  delete recipe[ingredientname];
  return recipe
}

function updateIngredient(recipe,ingredientname,amount){
  recipe[ingredientname] = amount
  return recipe
}

function readRecipe(recipe){
  for(var key in recipe){
    console.log(`this recipe calls for ${recipe[key]} of ${key}`)
  }
}