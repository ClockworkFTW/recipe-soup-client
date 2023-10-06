import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../api/user";

export function useUpdateUser() {
  return useMutation({
    mutationFn: ({ userId, data }) => updateUser({ userId, data }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
