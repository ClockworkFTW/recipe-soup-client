import { useState } from "react";
import { useToken } from "./useAuth";
import * as authApi from "../api/auth";

export function useLoginUser() {
  const { setToken } = useToken();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function loginUser(credentials) {
    try {
      setLoading(true);
      const accessToken = await authApi.loginUser(credentials);
      setToken(accessToken);
      setError(null);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  }

  return { loginUser, loading, success, error };
}
