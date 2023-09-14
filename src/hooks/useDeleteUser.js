import { useContext } from "react";
import { AuthContext } from "../features/Auth/Auth.context";
import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "../api/user";

export function useDeleteUser() {
  const { setToken } = useContext(AuthContext);
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      setToken(null);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
