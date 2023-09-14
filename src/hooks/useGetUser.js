import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/user";
import { useAuth } from "./useAuth";

export function useGetUser(userId) {
  const { token } = useAuth();
  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUser({ token, userId }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
