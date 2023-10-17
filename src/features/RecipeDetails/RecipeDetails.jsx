import { useParams } from "react-router-dom";

import { useGetRecipe } from "../../hooks/useGetRecipe";
import Cuisine from "../../components/Cuisine";
import Rating from "../../components/Rating";
import RecipeMenu from "./RecipeMenu";
import RecipeServings from "./RecipeServings";
import RecipeTime from "./RecipeTime";
import RecipeImage from "./RecipeImage";
import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";
import * as Styled from "./RecipeDetails.style";

function RecipeDetails() {
  const { recipeId } = useParams();

  const { data: recipe } = useGetRecipe(recipeId);

  return recipe ? (
    <Styled.Container>
      <Styled.Header>
        <RecipeImage image={recipe.image} />
        <Styled.Content>
          <Styled.ContentTop>
            <Cuisine cuisine={recipe.cuisine} />
            <RecipeMenu recipeId={recipeId} />
          </Styled.ContentTop>
          <Styled.ContentMid>
            <h3>{recipe.name}</h3>
            <Rating rating={recipe.rating} />
          </Styled.ContentMid>
          <Styled.ContentBot>
            <RecipeServings servings={recipe.servings} />
            <RecipeTime prepTime={recipe.prepTime} cookTime={recipe.cookTime} />
          </Styled.ContentBot>
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
