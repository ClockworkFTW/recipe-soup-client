import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useRecipeEditorActions } from "../../../../hooks/useRecipeEditor";
import Icon from "../../../../components/Icon";
import TextArea from "../../../../components/TextArea";
import * as Styled from "./IngredientItem.styles";

function IngredientItem({ sortableId, ingredient }) {
  const { updateIngredient, deleteIngredient } = useRecipeEditorActions();

  function handleUpdateIngredient(event) {
    updateIngredient(ingredient.id, event.target.value);
  }

  function handleDeleteIngredient() {
    deleteIngredient(ingredient.id);
  }

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: sortableId });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  const [isHoverNumber, setIsHoverNumber] = useState(false);

  return (
    <Styled.Item ref={setNodeRef} style={style}>
      <Styled.Number
        onMouseEnter={() => setIsHoverNumber(true)}
        onMouseLeave={() => setIsHoverNumber(false)}
        onClick={handleDeleteIngredient}
      >
        {isHoverNumber ? <Icon icon="trash-can" /> : ingredient.index + 1}
      </Styled.Number>
      <TextArea value={ingredient.text} onChange={handleUpdateIngredient} />
      <Styled.Grip {...attributes} {...listeners}>
        <Icon icon="grip-vertical" />
      </Styled.Grip>
    </Styled.Item>
  );
}

export default IngredientItem;
