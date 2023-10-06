import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../api/user";
import { useToken } from "./useAuth";

export function useUpdateUser() {
  const { setToken } = useToken();
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
