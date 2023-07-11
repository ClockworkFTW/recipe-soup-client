import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipe";

export function useGetRecipes() {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
    initialData: [],
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
