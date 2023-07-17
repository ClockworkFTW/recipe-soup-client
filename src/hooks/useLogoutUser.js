import { useContext, useState } from "react";
import { AuthContext } from "../features/Auth/Auth.context";
import * as authApi from "../api/auth";

export function useLogoutUser() {
  const { setToken } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function logoutUser() {
    try {
      setLoading(true);
      await authApi.logoutUser();
      setToken(null);
      setSuccess(true);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  }

  return { logoutUser, loading, success, error };
}
