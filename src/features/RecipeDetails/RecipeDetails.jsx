import { useNavigate, useParams } from "react-router-dom";

import { useGetRecipe } from "../../hooks/useGetRecipe";
import { ButtonPrimary } from "../../components/Button";
import Cuisine from "../../components/Cuisine";
import Rating from "../../components/Rating";
import Time from "../../components/Time";
import RecipeImage from "./RecipeImage";
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
    <Styled.Container>
      <Styled.Header>
        <RecipeImage image={recipe.image} />
        <Styled.Content>
          <Styled.ContentTop>
            <Cuisine cuisine={recipe.cuisine} />
            <h1>{recipe.name}</h1>
            <Rating rating={recipe.rating} />
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
            <ButtonPrimary label="Edit" onClick={editRecipe} />
            <ButtonPrimary label="Share" onClick={shareRecipe} />
            <ButtonPrimary label="Print" onClick={printRecipe} />
          </Styled.Menu>
        </Styled.Content>
      </Styled.Header>
      <Styled.Body>
        <IngredientList ingredients={recipe.ingredients} />
        <InstructionList instructions={recipe.instructions} />
      </Styled.Body>
    </Styled.Container>
  ) : null;
}

export default RecipeDetails;
