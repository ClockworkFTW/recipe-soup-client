import { useContext, useState } from "react";

import { RecipeEditorContext } from "../RecipeEditor.context";

import * as Styled from "./RatingPicker.styles";

import Icon from "../../../components/Icon";

const RatingPicker = () => {
  const { editedRecipe, dispatch } = useContext(RecipeEditorContext);

  const [hover, setHover] = useState(editedRecipe.rating);

  function setRating(rating) {
    dispatch({ type: "UPDATE_RATING", rating });
  }

  return (
    <div>
      <h3>Rating</h3>
      {[...Array(5)].map((_, index) => {
        const color =
          index + 1 <= (hover || editedRecipe.rating) ? "#f1c40f" : "#bdc3c7";

        return (
          <Styled.Button
            type="button"
            key={index + 1}
            color={color}
            onClick={() => setRating(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(editedRecipe.rating)}
          >
            <Icon icon="star" />
          </Styled.Button>
        );
      })}
    </div>
  );
};

export default RatingPicker;
