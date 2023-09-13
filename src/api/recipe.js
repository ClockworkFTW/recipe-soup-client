import axios from "axios";
import config from "../config";

const recipeApi = axios.create({
  baseURL: `${config.API_URL}/recipe`,
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

export async function updateRecipe({ recipeId, recipe }) {
  return await recipeApi.patch(`/${recipeId}`, recipe);
}

export async function deleteRecipe(recipeId) {
  return await recipeApi.delete(`/${recipeId}`);
}
