import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

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

  const { data, isLoading, isSuccess, isError } = useGetRecipe(recipeId);

  console.log(isLoading);

  function renderLoader() {
    if (isLoading) {
      return (
        <>
          <Styled.Header>
            <Skeleton style={{ aspectRatio: 1 }} />
            <Styled.Content>
              <Skeleton height={30} />
              <Skeleton height={30} />
              <Skeleton height={30} />
              <Skeleton height={30} />
            </Styled.Content>
          </Styled.Header>
          <Styled.Body>
            <div>
              <Skeleton
                count={10}
                height={30}
                style={{ marginBottom: "1rem" }}
              />
            </div>
            <div>
              <Skeleton
                count={10}
                height={30}
                style={{ marginBottom: "1rem" }}
              />
            </div>
          </Styled.Body>
        </>
      );
    }
  }

  function renderData() {
    if (isSuccess) {
      const {
        name,
        image,
        rating,
        cuisine,
        servings,
        prepTime,
        cookTime,
        ingredients,
        instructions,
      } = data;

      return (
        <>
          <Styled.Header>
            <RecipeImage image={image} />
            <Styled.Content>
              <Styled.ContentTop>
                <Cuisine cuisine={cuisine} />
                <RecipeMenu recipeId={recipeId} />
              </Styled.ContentTop>
              <Styled.ContentMid>
                <h3>{name}</h3>
                <Rating rating={rating} />
              </Styled.ContentMid>
              <Styled.ContentBot>
                <RecipeServings servings={servings} />
                <RecipeTime prepTime={prepTime} cookTime={cookTime} />
              </Styled.ContentBot>
            </Styled.Content>
          </Styled.Header>
          <Styled.Body>
            <IngredientList ingredients={ingredients} />
            <InstructionList instructions={instructions} />
          </Styled.Body>
        </>
      );
    }
  }

  function renderError() {
    if (isError) {
      return null;
    }
  }

  return (
    <Styled.Container>
      {renderLoader()}
      {renderData()}
      {renderError()}
    </Styled.Container>
  );
}

export default RecipeDetails;
