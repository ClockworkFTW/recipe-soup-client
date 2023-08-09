import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

import Icon from "../../../components/Icon";
import * as Styled from "./RatingPicker.styles";

const RatingPicker = () => {
  const { setValue } = useFormContext();

  const rating = useWatch({ name: "rating" });

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
            onClick={() => setValue("rating", index + 1)}
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
