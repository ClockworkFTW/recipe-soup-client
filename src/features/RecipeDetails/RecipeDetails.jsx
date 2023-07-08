import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getRecipe } from "../../api/recipe";

import Button from "../../components/Button";
import Time from "../../components/Time";

function RecipeDetails() {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const recipe = useQuery({
    queryKey: ["recipes", recipeId],
    queryFn: () => getRecipe(recipeId),
  });

  function editRecipe() {
    navigate(`/recipe/edit/${recipeId}`);
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
      <h3>Ingredients</h3>
      <ul>
        {recipe.data.ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.text}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ul>
        {recipe.data.instructions.map((instruction) => (
          <li key={instruction.id}>{instruction.text}</li>
        ))}
      </ul>
    </div>
  ) : null;
}

export default RecipeDetails;
