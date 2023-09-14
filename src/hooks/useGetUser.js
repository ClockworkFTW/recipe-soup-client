import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/user";

export function useGetUser(userId) {
  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUser(userId),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
