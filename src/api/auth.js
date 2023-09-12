import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:3000/api/auth",
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
