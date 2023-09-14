import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteRecipe } from "../api/recipe";
import { useAuth } from "./useAuth";

export function useDeleteRecipe() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { token } = useAuth();
  return useMutation({
    mutationFn: (recipeId) => deleteRecipe({ token, recipeId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      navigate("/recipes");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
