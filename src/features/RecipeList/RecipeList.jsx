import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import RecipeCard from "./RecipeCard";
import { useGetRecipes } from "../../hooks/useGetRecipes";
import * as Styled from "./RecipeList.style";

function RecipeList() {
  const navigate = useNavigate();

  const { data: recipes } = useGetRecipes();

  function onAddRecipe() {
    navigate("/recipes/edit/new");
  }

  return (
    <div>
      <h2>Recipe List</h2>
      <Button label="Add Recipe" onClick={onAddRecipe} />
      <Styled.Grid>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Styled.Grid>
    </div>
  );
}

export default RecipeList;
