import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../api/recipe";

export function useCreateRecipe() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (recipe) => createRecipe({ recipe }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      navigate(`/recipes/${data.data.id}`);
    },
  });
}
