import axios from "axios";
import config from "../config";
import useAuth from "../hooks/useAuth";
import { refreshAccessToken } from "./auth";
import { sleep } from "../utilities/sleep";

const recipeApi = axios.create({
  baseURL: `${config.API_URL}/recipe`,
  withCredentials: true,
});

recipeApi.interceptors.request.use(
  (config) => {
    if (config._retry) {
      return config;
    }

    const { token } = useAuth.getState();
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

recipeApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 403 && !error.config._retry) {
      error.config._retry = true;

      const { setToken } = useAuth.getState();
      const token = await refreshAccessToken();
      setToken(token);

      error.config.headers["Authorization"] = `Bearer ${token}`;

      return recipeApi.request(error.config);
    }
    return Promise.reject(error);
  }
);

export async function getRecipes({ page, query, sort }) {
  const endpoint = `/?page=${page}&query=${query}&sort=${sort}`;
  const result = await recipeApi.get(endpoint);
  await sleep(1000);
  return result.data;
}

export async function getRecipe({ recipeId }) {
  const endpoint = `/${recipeId}`;
  const result = await recipeApi.get(endpoint);
  await sleep(1000);
  return result.data;
}

export async function createRecipe({ recipe }) {
  const endpoint = `/`;
  return await recipeApi.post(endpoint, recipe);
}

export async function updateRecipe({ recipeId, recipe }) {
  const endpoint = `/${recipeId}`;
  console.log(recipeId, recipe);
  return await recipeApi.patch(endpoint, recipe);
}

export async function deleteRecipe({ recipeId }) {
  const endpoint = `/${recipeId}`;
  return await recipeApi.delete(endpoint);
}
