import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../api/recipe";

export function useGetRecipe(recipeId) {
  return useQuery({
    enabled: recipeId !== "new",
    queryKey: ["recipes", recipeId],
    queryFn: () => getRecipe({ recipeId }),
  });
}
