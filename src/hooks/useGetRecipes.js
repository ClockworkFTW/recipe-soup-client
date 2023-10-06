import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipe";

export function useGetRecipes({ page, query, sort }) {
  return useQuery({
    initialData: { count: 0, recipes: [] },
    queryKey: ["recipes", page, query, sort],
    queryFn: () => getRecipes({ page, query, sort }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
