import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import Time from "../../../components/Time";
import Cuisine from "../../../components/Cuisine";
import Rating from "../../../components/Rating";
import * as Styled from "./RecipeCard.style";

function RecipeCard({ recipe }) {
  const { id, image, cuisine, name, rating, prepTime, cookTime } = recipe;

  const navigate = useNavigate();

  function handleCardClicked() {
    navigate(`/recipes/${id}`);
  }

  return (
    <Styled.Container onClick={handleCardClicked}>
      <Styled.Image src={image} />
      <Styled.Content>
        <Cuisine cuisine={cuisine} />
        <h5>{name}</h5>
        <Rating rating={rating} />
        <Time values={[prepTime, cookTime]} />
      </Styled.Content>
    </Styled.Container>
  );
}

export function SkeletonCard() {
  return (
    <Styled.Container>
      <Skeleton style={{ aspectRatio: "3/2" }} />
      <Skeleton count={4} />
    </Styled.Container>
  );
}

export default RecipeCard;
