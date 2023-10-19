import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "../api/user";
import { useToken } from "./useAuth";

export function useDeleteUser() {
  const { setToken } = useToken();

  return useMutation({
    mutationFn: (userId) => deleteUser({ userId }),
    onSuccess: () => {
      setToken(null);
    },
  });
}
