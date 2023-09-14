import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../api/recipe";
import { useAuth } from "./useAuth";

export function useGetRecipe(recipeId) {
  const { token } = useAuth();
  return useQuery({
    enabled: recipeId !== "new",
    queryKey: ["recipes", recipeId],
    queryFn: () => getRecipe({ token, recipeId }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
