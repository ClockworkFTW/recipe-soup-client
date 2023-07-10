import { useContext } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { RecipeEditorContext } from "../../RecipeEditor.context";

import Button from "../../../../components/Button/Button";

function IngredientItem({ id, ingredient }) {
  const [_, dispatch] = useContext(RecipeEditorContext);

  function updateIngredient(e) {
    dispatch({
      type: "UPDATE_INGREDIENT",
      id: ingredient.id,
      text: e.target.value,
    });
  }

  function deleteIngredient() {
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
      <input type="text" value={ingredient.text} onChange={updateIngredient} />
      <Button label="delete" onClick={deleteIngredient} />
      <span {...attributes} {...listeners}>
        DRAG
      </span>
    </li>
  );
}

export default IngredientItem;
