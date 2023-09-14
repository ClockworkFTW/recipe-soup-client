import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipe";
import { useAuth } from "./useAuth";

export function useGetRecipes() {
  const { token } = useAuth();
  return useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipes({ token }),
    initialData: [],
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
