import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { useGetRecipes } from "../../hooks/useGetRecipes";

function RecipeList() {
  const navigate = useNavigate();

  const { data: recipes } = useGetRecipes();

  function initRecipe() {
    navigate("/recipes/edit/new");
  }

  return (
    <div>
      <h2>Recipe List</h2>
      <Button label="Add Recipe" onClick={initRecipe} />
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
