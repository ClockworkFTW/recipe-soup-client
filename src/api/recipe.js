import axios from "axios";

const recipeApi = axios.create({
  baseURL: "http://localhost:3000/api/recipe",
  withCredentials: true,
});

export async function getRecipes() {
  const result = await recipeApi.get("/");
  return result.data;
}

export async function getRecipe(recipeId) {
  const result = await recipeApi.get(`/${recipeId}`);
  return result.data;
}

export async function createRecipe(recipe) {
  return await recipeApi.post(`/`, recipe);
}

export async function updateRecipe(recipe) {
  return await recipeApi.patch(`/${recipe.id}`, recipe);
}

export async function deleteRecipe(recipe) {
  return await recipeApi.delete(`/${recipe.id}`);
}
