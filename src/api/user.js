import axios from "axios";
import config from "../config";

const userApi = axios.create({
  baseURL: `${config.API_URL}/user`,
  withCredentials: true,
});

function createAuthHeader(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export async function getUser({ token, userId }) {
  const result = await userApi.get(`/${userId}`, createAuthHeader(token));
  return result.data;
}

export async function updateUser({ token, userId, data }) {
  return await userApi.patch(`/${userId}`, data, createAuthHeader(token));
}

export async function deleteUser({ token, userId }) {
  return await userApi.delete(`/${userId}`, createAuthHeader(token));
}
