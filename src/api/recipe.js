import axios from "axios";
import config from "../config";

const recipeApi = axios.create({
  baseURL: `${config.API_URL}/recipe`,
  withCredentials: true,
});

function createAuthHeader(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export async function getRecipes({ token }) {
  const result = await recipeApi.get("/", createAuthHeader(token));
  return result.data;
}

export async function getRecipe({ token, recipeId }) {
  const result = await recipeApi.get(`/${recipeId}`, createAuthHeader(token));
  return result.data;
}

export async function createRecipe({ token, recipe }) {
  return await recipeApi.post(`/`, recipe, createAuthHeader(token));
}

export async function updateRecipe({ token, recipeId, recipe }) {
  return await recipeApi.patch(`/${recipeId}`, recipe, createAuthHeader(token));
}

export async function deleteRecipe({ token, recipeId }) {
  return await recipeApi.delete(`/${recipeId}`, createAuthHeader(token));
}
