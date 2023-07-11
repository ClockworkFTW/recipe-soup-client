import axios from "axios";

const recipeApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

export async function getRecipes() {
  const result = await recipeApi.get("/recipe");
  return result.data;
}

export async function getRecipe(recipeId) {
  const result = await recipeApi.get(`/recipe/${recipeId}`);
  return result.data;
}

export async function createRecipe(recipe) {
  return await recipeApi.post(`/recipe`, recipe);
}

export async function updateRecipe(recipe) {
  return await recipeApi.patch(`/recipe/${recipe.id}`, recipe);
}

export async function deleteRecipe(recipe) {
  return await recipeApi.delete(`/recipe/${recipe.id}`);
}

export default recipeApi;
