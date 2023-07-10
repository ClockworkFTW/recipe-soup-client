import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getRecipes } from "../../api/recipe";

function RecipeList() {
  const recipes = useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
    initialData: [],
  });

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.data.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
