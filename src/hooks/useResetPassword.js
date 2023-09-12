import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as authApi from "../api/auth";

export function useResetPassword() {
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function resetPassword(credentials) {
    try {
      setLoading(true);
      await authApi.resetPassword(credentials, token);
      setError(null);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  }

  return { resetPassword, loading, success, error };
}
