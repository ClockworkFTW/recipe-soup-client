import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Icon from "../../../../components/Icon";
import TextArea from "../../../../components/TextArea";
import * as Styled from "./IngredientItem.styles";

function IngredientItem({ ingredient }) {
  const sortable = useSortable({ id: ingredient.id });

  const style = {
    transform: CSS.Translate.toString(sortable.transform),
    transition: sortable.transition,
  };

  const [isMouseOverIcon, setIsMouseOverIcon] = useState(false);

  return (
    <Styled.Item ref={sortable.setNodeRef} style={style}>
      <Styled.Bullet
        onMouseEnter={() => setIsMouseOverIcon(true)}
        onMouseLeave={() => setIsMouseOverIcon(false)}
        onClick={ingredient.remove}
      >
        <Styled.Icon $opacity={isMouseOverIcon ? "1" : "0"}>
          <Icon icon="trash-can" />
        </Styled.Icon>
        <Styled.Icon $opacity={isMouseOverIcon ? "0" : "1"}>
          {ingredient.index + 1}
        </Styled.Icon>
      </Styled.Bullet>
      <TextArea name={ingredient.fieldName} placeholder="Ingredient" />
      <Styled.Grip {...sortable.attributes} {...sortable.listeners}>
        <Icon icon="grip-vertical" />
      </Styled.Grip>
    </Styled.Item>
  );
}

export default IngredientItem;
