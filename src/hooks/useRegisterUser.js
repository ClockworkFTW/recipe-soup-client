import { useContext, useState } from "react";
import { AuthContext } from "../features/Auth/Auth.context";
import * as authApi from "../api/auth";

export function useRegisterUser() {
  const { setToken } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function registerUser(credentials) {
    try {
      setLoading(true);
      const accessToken = await authApi.registerUser(credentials);
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

  return { registerUser, loading, success, error };
}
