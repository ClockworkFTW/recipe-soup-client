import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipe";

export function useGetRecipes({ page, query, sort }) {
  return useQuery({
    queryKey: ["recipes", page, query, sort],
    queryFn: () => getRecipes({ page, query, sort }),
  });
}
