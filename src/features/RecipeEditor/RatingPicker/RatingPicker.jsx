import { useState } from "react";

import {
  useRating,
  useRecipeEditorActions,
} from "../../../hooks/useRecipeEditor";
import Icon from "../../../components/Icon";
import * as Styled from "./RatingPicker.styles";

const RatingPicker = () => {
  const rating = useRating();

  const { updateRating } = useRecipeEditorActions();

  const [hover, setHover] = useState(rating);

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const $isActive = index + 1 <= (hover || rating);
        return (
          <Styled.Button
            type="button"
            key={index + 1}
            $isActive={$isActive}
            onClick={() => updateRating(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(rating)}
          >
            <Icon icon="star" />
          </Styled.Button>
        );
      })}
    </div>
  );
};

export default RatingPicker;
