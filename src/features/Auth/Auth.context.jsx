import { createContext, useEffect, useState } from "react";

import * as authApi from "../../api/auth";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  const [effectRan, setEffectRan] = useState(false);

  async function initAuth() {
    try {
      const token = await authApi.refreshAccessToken();
      setToken(token);
    } catch (error) {
      console.log(error);
    } finally {
      setEffectRan(true);
    }
  }

  useEffect(() => {
    if (!effectRan) {
      initAuth();
    }
  }, []);

  return effectRan ? (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  ) : null;
}
