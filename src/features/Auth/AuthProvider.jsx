import { useEffect, useState } from "react";

import * as authApi from "../../api/auth";
import { useToken } from "../../hooks/useAuth";

export function AuthProvider({ children }) {
  const { setToken } = useToken();

  const [effectRan, setEffectRan] = useState(false);

  useEffect(() => {
    async function initAuth() {
      try {
        const accessToken = await authApi.refreshAccessToken();
        setToken(accessToken);
      } catch (error) {
        console.log(error);
      } finally {
        setEffectRan(true);
      }
    }

    if (!effectRan) {
      initAuth();
    }
  }, []);

  return effectRan ? children : null;
}
