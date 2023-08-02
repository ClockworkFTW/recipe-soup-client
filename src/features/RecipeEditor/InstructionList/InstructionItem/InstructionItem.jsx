import { useContext, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { RecipeEditorContext } from "../../RecipeEditor.context";

import Icon from "../../../../components/Icon";
import TextArea from "../../../../components/TextArea";
import * as Styled from "./InstructionItem.styles";

function InstructionItem({ id, instruction }) {
  const { dispatch } = useContext(RecipeEditorContext);

  function handleUpdateInstruction(event) {
    dispatch({
      type: "UPDATE_INSTRUCTION",
      id: instruction.id,
      text: event.target.value,
    });
  }

  function handleDeleteInstruction() {
    dispatch({
      type: "DELETE_INSTRUCTION",
      id: instruction.id,
    });
  }

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

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
