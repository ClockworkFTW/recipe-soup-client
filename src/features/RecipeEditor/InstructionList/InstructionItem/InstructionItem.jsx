import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Icon from "../../../../components/Icon";
import TextArea from "../../../../components/TextArea";
import * as Styled from "./InstructionItem.styles";

function InstructionItem({ instruction, handleRemoveInstruction, index }) {
  const sortable = useSortable({ id: instruction.id });

  const style = {
    transform: CSS.Translate.toString(sortable.transform),
    transition: sortable.transition,
  };

  const [isMouseOverNumber, setIsMouseOverNumber] = useState(false);

  const placeholder =
    instruction.type.charAt(0).toUpperCase() + instruction.type.slice(1);

  return (
    <Styled.Item ref={sortable.setNodeRef} style={style}>
      <Styled.Number
        onMouseEnter={() => setIsMouseOverNumber(true)}
        onMouseLeave={() => setIsMouseOverNumber(false)}
        onClick={() => handleRemoveInstruction(index)}
      >
        {isMouseOverNumber ? <Icon icon="trash-can" /> : index + 1}
      </Styled.Number>
      <Styled.Content
        fontWeight={instruction.type === "section" ? "bold" : "normal"}
      >
        <TextArea
          name={`instructions.${index}.text`}
          placeholder={placeholder}
        />
      </Styled.Content>
      <Styled.Grip {...sortable.attributes} {...sortable.listeners}>
        <Icon icon="grip-vertical" />
      </Styled.Grip>
    </Styled.Item>
  );
}

export default InstructionItem;
