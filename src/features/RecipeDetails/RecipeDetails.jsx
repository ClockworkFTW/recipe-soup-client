import { useNavigate, useParams } from "react-router-dom";

import { useGetRecipe } from "../../hooks/useGetRecipe";
import Button from "../../components/Button";
import Time from "../../components/Time";
import RecipeImage from "./RecipeImage";
import RecipeCuisine from "./RecipeCuisine";
import RecipeRating from "./RecipeRating";
import RecipeServings from "./RecipeServings";
import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";
import * as Styled from "./RecipeDetails.style";

function RecipeDetails() {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const { data: recipe } = useGetRecipe(recipeId);

  function editRecipe() {
    navigate(`/recipes/edit/${recipeId}`);
  }

  function shareRecipe() {
    alert("Share");
  }

  function printRecipe() {
    alert("Print");
  }

  return recipe ? (
    <div>
      <Styled.Header>
        <RecipeImage image={recipe.image} />
        <Styled.Content>
          <Styled.ContentTop>
            <RecipeCuisine cuisine={recipe.cuisine} />
            <h1>{recipe.name}</h1>
            <RecipeRating rating={recipe.rating} />
          </Styled.ContentTop>
          <Styled.ContentBottom>
            <RecipeServings servings={recipe.servings} />
            <Styled.Spacer />
            <Time label="Prep" values={[recipe.prepTime]} />
            <Styled.Spacer />
            <Time label="Cook" values={[recipe.cookTime]} />
            <Styled.Spacer />
            <Time label="Total" values={[recipe.prepTime, recipe.cookTime]} />
          </Styled.ContentBottom>
          <Styled.Menu>
            <Button label="Edit" onClick={editRecipe} />
            <Button label="Share" onClick={shareRecipe} />
            <Button label="Print" onClick={printRecipe} />
          </Styled.Menu>
        </Styled.Content>
      </Styled.Header>
      <Styled.Body>
        <IngredientList ingredients={recipe.ingredients} />
        <InstructionList instructions={recipe.instructions} />
      </Styled.Body>
    </div>
  ) : null;
}

export default RecipeDetails;
