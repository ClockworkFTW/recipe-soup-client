import { useContext } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { RecipeEditorContext } from "../../RecipeEditor.context";

import Button from "../../../../components/Button/Button";

function IngredientItem({ id, ingredient }) {
  const { dispatch } = useContext(RecipeEditorContext);

  function handleUpdateIngredient(event) {
    dispatch({
      type: "UPDATE_INGREDIENT",
      id: ingredient.id,
      text: event.target.value,
    });
  }

  function handleDeleteIngredient() {
    dispatch({
      type: "DELETE_INGREDIENT",
      id: ingredient.id,
    });
  }

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li ref={setNodeRef} style={style}>
      <input
        type="text"
        value={ingredient.text}
        onChange={handleUpdateIngredient}
      />
      <Button label="delete" onClick={handleDeleteIngredient} />
      <span {...attributes} {...listeners}>
        DRAG
      </span>
    </li>
  );
}

export default IngredientItem;
