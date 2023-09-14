import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../api/user";
import { useAuth } from "./useAuth";

export function useUpdateUser() {
  const { token } = useAuth();
  return useMutation({
    mutationFn: ({ userId, data }) => updateUser({ token, userId, data }),
    onSuccess: () => {
      setToken(null);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
