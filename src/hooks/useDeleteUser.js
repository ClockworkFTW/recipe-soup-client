import { useContext } from "react";
import { AuthContext } from "../features/Auth/Auth.context";
import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "../api/user";
import { useAuth } from "./useAuth";

export function useDeleteUser() {
  const { token } = useAuth();
  const { setToken } = useContext(AuthContext);
  return useMutation({
    mutationFn: (userId) => deleteUser({ token, userId }),
    onSuccess: () => {
      setToken(null);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
