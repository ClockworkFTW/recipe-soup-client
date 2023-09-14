import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../api/recipe";
import { useAuth } from "./useAuth";

export function useCreateRecipe() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { token } = useAuth();
  return useMutation({
    mutationFn: (recipe) => createRecipe({ token, recipe }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      navigate(`/recipes/${data.data.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
