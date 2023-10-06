import axios from "axios";
import config from "../config";
import useAuth from "../hooks/useAuth";
import { refreshAccessToken } from "./auth";

const userApi = axios.create({
  baseURL: `${config.API_URL}/user`,
  withCredentials: true,
});

userApi.interceptors.request.use(
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

userApi.interceptors.response.use(
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

      return userApi.request(error.config);
    }
    return Promise.reject(error);
  }
);

export async function getUser({ userId }) {
  const endpoint = `/${userId}`;
  const result = await userApi.get(endpoint);
  return result.data;
}

export async function updateUser({ userId, data }) {
  const endpoint = `/${userId}`;
  return await userApi.patch(endpoint, data);
}

export async function deleteUser({ userId }) {
  const endpoint = `/${userId}`;
  return await userApi.delete(endpoint);
}
