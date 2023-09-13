import axios from "axios";
import config from "../config";

const authApi = axios.create({
  baseURL: `${config.API_URL}/auth`,
  withCredentials: true,
});

export async function registerUser(credentials) {
  const result = await authApi.post("/register", credentials);
  return result.data.accessToken;
}

export async function loginUser(credentials) {
  const result = await authApi.post("/login", credentials);
  return result.data.accessToken;
}

export async function logoutUser() {
  return await authApi.post("/logout");
}

export async function refreshAccessToken() {
  const result = await authApi.post("/refresh");
  return result.data.accessToken;
}

export async function forgotPassword(credentials) {
  return await authApi.post(`/forgot-password`, credentials);
}

export async function resetPassword(credentials, token) {
  return await authApi.post(`/reset-password/${token}`, credentials);
}
