import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteRecipe } from "../api/recipe";

export function useDeleteRecipe() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: deleteRecipe,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      navigate("/recipes");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
