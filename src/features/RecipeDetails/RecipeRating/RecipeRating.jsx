import * as Styled from "./RecipeRating.styles";

import Icon from "../../../components/Icon";

const RecipeRating = ({ rating }) => (
  <div>
    {[...Array(5)].map((_, index) => {
      const color = index + 1 <= rating ? "#f1c40f" : "#bdc3c7";
      return (
        <Styled.Icon key={index + 1} color={color}>
          <Icon icon="star" />
        </Styled.Icon>
      );
    })}
  </div>
);

export default RecipeRating;
