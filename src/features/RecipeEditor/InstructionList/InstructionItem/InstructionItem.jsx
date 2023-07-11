import { useContext } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { RecipeEditorContext } from "../../RecipeEditor.context";

import Button from "../../../../components/Button/Button";

function InstructionItem({ id, instruction }) {
  const { dispatch } = useContext(RecipeEditorContext);

  function updateInstruction(e) {
    dispatch({
      type: "UPDATE_INSTRUCTION",
      id: instruction.id,
      text: e.target.value,
    });
  }

  function deleteInstruction() {
    dispatch({
      type: "DELETE_INSTRUCTION",
      id: instruction.id,
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
      <span>{instruction.index + 1}</span>
      <input
        type="text"
        value={instruction.text}
        onChange={updateInstruction}
      />
      <Button label="delete" onClick={deleteInstruction} />
      <span {...attributes} {...listeners}>
        DRAG
      </span>
    </li>
  );
}

export default InstructionItem;
