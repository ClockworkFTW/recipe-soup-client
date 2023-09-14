import axios from "axios";
import config from "../config";

const userApi = axios.create({
  baseURL: `${config.API_URL}/user`,
  withCredentials: true,
});

export async function getUser(userId) {
  const result = await userApi.get(`/${userId}`);
  return result.data;
}

export async function updateUser({ userId, user }) {
  return await userApi.patch(`/${userId}`, user);
}

export async function deleteUser(userId) {
  return await userApi.delete(`/${userId}`);
}
