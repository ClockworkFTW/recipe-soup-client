import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Icon from "../../../../components/Icon";
import TextArea from "../../../../components/TextArea";
import * as Styled from "./IngredientItem.styles";

function IngredientItem({ index, ingredient, handleRemoveIngredient }) {
  const sortable = useSortable({ id: ingredient.id });

  const style = {
    transform: CSS.Translate.toString(sortable.transform),
    transition: sortable.transition,
  };

  const [isMouseOverNumber, setIsMouseOverNumber] = useState(false);

  return (
    <Styled.Item ref={sortable.setNodeRef} style={style}>
      <Styled.Number
        onMouseEnter={() => setIsMouseOverNumber(true)}
        onMouseLeave={() => setIsMouseOverNumber(false)}
        onClick={() => handleRemoveIngredient(index)}
      >
        {isMouseOverNumber ? <Icon icon="trash-can" /> : index + 1}
      </Styled.Number>
      <TextArea name={`ingredients.${index}.text`} placeholder="Ingredient" />
      <Styled.Grip {...sortable.attributes} {...sortable.listeners}>
        <Icon icon="grip-vertical" />
      </Styled.Grip>
    </Styled.Item>
  );
}

export default IngredientItem;
