import { useEffect, useState } from "react";

import * as authApi from "../../api/auth";
import { useToken } from "../../hooks/useAuth";

export function AuthProvider({ children }) {
  const { setToken } = useToken();

  const [isInitialized, setIsInitialized] = useState(false);

  async function initAuth() {
    try {
      const accessToken = await authApi.refreshAccessToken();
      setToken(accessToken);
    } catch (error) {
      setToken(null);
    } finally {
      setIsInitialized(true);
    }
  }

  useEffect(() => {
    initAuth();

    window.addEventListener("focus", initAuth);

    return () => {
      window.removeEventListener("focus", initAuth);
    };
  }, []);

  return isInitialized ? children : null;
}
