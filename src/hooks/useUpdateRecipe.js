import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateRecipe } from "../api/recipe";

export function useUpdateRecipe() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: updateRecipe,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      navigate(`/recipes/${data.data.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
