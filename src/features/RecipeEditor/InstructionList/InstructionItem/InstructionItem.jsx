import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useRecipeEditorActions } from "../../../../hooks/useRecipeEditor";
import Icon from "../../../../components/Icon";
import TextArea from "../../../../components/TextArea";
import * as Styled from "./InstructionItem.styles";

function InstructionItem({ sortableId, instruction }) {
  const { updateInstruction, deleteInstruction } = useRecipeEditorActions();

  function handleUpdateInstruction(event) {
    updateInstruction(instruction.id, event.target.value);
  }

  function handleDeleteInstruction() {
    deleteInstruction(instruction.id);
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
        onClick={handleDeleteInstruction}
      >
        {isHoverNumber ? <Icon icon="trash-can" /> : instruction.index + 1}
      </Styled.Number>
      <Styled.Content
        fontWeight={instruction.type === "section" ? "bold" : "normal"}
      >
        <TextArea value={instruction.text} onChange={handleUpdateInstruction} />
      </Styled.Content>
      <Styled.Grip {...attributes} {...listeners}>
        <Icon icon="grip-vertical" />
      </Styled.Grip>
    </Styled.Item>
  );
}

export default InstructionItem;
