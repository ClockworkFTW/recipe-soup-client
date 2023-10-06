import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipe";
import { useAuth } from "./useAuth";

export function useGetRecipes({ page, query, sort }) {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["recipes", page, query, sort],
    queryFn: () => getRecipes({ token, page, query, sort }),
    initialData: { count: 0, recipes: [] },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
