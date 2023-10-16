import { Link } from "react-router-dom";

import Time from "../../../components/Time";
import Cuisine from "../../../components/Cuisine";
import Rating from "../../../components/Rating";
import * as Styled from "./RecipeCard.style";

function RecipeCard({ recipe }) {
  return (
    <Styled.Wrapper>
      <Link to={`/recipes/${recipe.id}`}>
        <Styled.Container>
          <Styled.Image src={recipe.image} />
          <Styled.Content>
            <Cuisine cuisine={recipe.cuisine} />
            <h5>{recipe.name}</h5>
            <Rating rating={recipe.rating} />
            <Time values={[recipe.prepTime, recipe.cookTime]} />
          </Styled.Content>
        </Styled.Container>
      </Link>
    </Styled.Wrapper>
  );
}

export default RecipeCard;
