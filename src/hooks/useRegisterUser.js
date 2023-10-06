import { useState } from "react";
import { useToken } from "./useAuth";
import * as authApi from "../api/auth";

export function useRegisterUser() {
  const { setToken } = useToken();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function registerUser(credentials) {
    try {
      setLoading(true);
      const token = await authApi.registerUser(credentials);
      setToken(token);
      setError(null);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  }

  return { registerUser, loading, success, error };
}
