import { useContext, useState } from "react";
import { AuthContext } from "../features/Auth/Auth.context";
import * as authApi from "../api/auth";

export function useLoginUser() {
  const { setToken } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function loginUser(credentials) {
    try {
      setLoading(true);
      const accessToken = await authApi.loginUser(credentials);
      setToken(accessToken);
      setSuccess(true);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  }

  return { loginUser, loading, success, error };
}
