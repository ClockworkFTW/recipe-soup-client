import { useContext } from "react";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../features/Auth/Auth.context";

export function useAuth() {
  const { token } = useContext(AuthContext);

  if (!token) return null;

  const decoded = jwtDecode(token);

  return decoded;
}
