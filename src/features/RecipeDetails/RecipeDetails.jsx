import { useNavigate, useParams } from "react-router-dom";

import { useGetRecipe } from "../../hooks/useGetRecipe";

import Button from "../../components/Button";
import Time from "../../components/Time";

import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";

function RecipeDetails() {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const { data: recipe } = useGetRecipe(recipeId);

  function editRecipe() {
    navigate(`/recipes/edit/${recipeId}`);
  }

  return recipe ? (
    <div>
      <h2>{recipe.name}</h2>
      <Button label="Edit" onClick={editRecipe} />
      <Time label="Prep Time" timeArray={[recipe.prepTime]} />
      <Time label="Cook Time" timeArray={[recipe.cookTime]} />
      <Time label="Total Time" timeArray={[recipe.prepTime, recipe.cookTime]} />
      <IngredientList ingredients={recipe.ingredients} />
      <InstructionList instructions={recipe.instructions} />
    </div>
  ) : null;
}

export default RecipeDetails;
