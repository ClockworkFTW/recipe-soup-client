import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateRecipe } from "../api/recipe";
import { useAuth } from "./useAuth";

export function useUpdateRecipe() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { token } = useAuth();
  return useMutation({
    mutationFn: (recipeId, recipe) => updateRecipe({ token, recipeId, recipe }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      navigate(`/recipes/${data.data.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
