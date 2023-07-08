import axios from "axios";

const baseURL = "http://localhost:3000/api";

export async function getRecipes() {
  const result = await axios.get(`${baseURL}/recipe`);
  return result.data;
}

export async function getRecipe(recipeId) {
  const result = await axios.get(`${baseURL}/recipe/${recipeId}`);
  return result.data;
}

export async function createRecipe(recipe) {
  const result = await axios.post(`${baseURL}/recipe`, recipe);
  return result.data;
}

export async function updateRecipe(recipe) {
  const result = await axios.patch(`${baseURL}/recipe/${recipe.id}`, recipe);
  return result.data;
}

export async function deleteRecipe(recipeId) {
  const result = await axios.delete(`${baseURL}/recipe/${recipeId}`);
  return result.data;
}
