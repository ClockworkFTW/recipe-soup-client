import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../api/recipe";

export function useGetRecipe(recipeId) {
  return useQuery({
    initialData: null,
    enabled: recipeId !== "new",
    queryKey: ["recipes", recipeId],
    queryFn: () => getRecipe({ recipeId }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
