import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getRecipe } from "../../api/recipe";

import Button from "../../components/Button";
import Time from "../../components/Time";

import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";

function RecipeDetails() {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const recipe = useQuery({
    queryKey: ["recipes", recipeId],
    queryFn: () => getRecipe(recipeId),
  });

  function editRecipe() {
    navigate(`/recipes/edit/${recipeId}`);
  }

  return recipe.data ? (
    <div>
      <h2>{recipe.data.name}</h2>
      <Button label="Edit" onClick={editRecipe} />
      <Time label="Prep Time" timeArray={[recipe.data.prepTime]} />
      <Time label="Cook Time" timeArray={[recipe.data.cookTime]} />
      <Time
        label="Total Time"
        timeArray={[recipe.data.prepTime, recipe.data.cookTime]}
      />
      <IngredientList ingredients={recipe.data.ingredients} />
      <InstructionList instructions={recipe.data.ingredients} />
    </div>
  ) : null;
}

export default RecipeDetails;
