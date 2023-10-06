import { useState } from "react";
import { useToken } from "./useAuth";
import * as authApi from "../api/auth";

export function useLogoutUser() {
  const { setToken } = useToken();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function logoutUser() {
    try {
      setLoading(true);
      await authApi.logoutUser();
      setToken(null);
      setError(null);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  }

  return { logoutUser, loading, success, error };
}
