import { useState } from "react";
import * as authApi from "../api/auth";

export function useForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function forgotPassword(credentials) {
    try {
      setLoading(true);
      await authApi.forgotPassword(credentials);
      setError(null);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  }

  return { forgotPassword, loading, success, error };
}
