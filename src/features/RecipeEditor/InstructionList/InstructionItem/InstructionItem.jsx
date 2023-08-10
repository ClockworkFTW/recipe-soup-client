import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Icon from "../../../../components/Icon";
import TextArea from "../../../../components/TextArea";
import * as Styled from "./InstructionItem.styles";

function InstructionItem({ instruction }) {
  const sortable = useSortable({ id: instruction.id });

  const style = {
    transform: CSS.Translate.toString(sortable.transform),
    transition: sortable.transition,
  };

  const [isMouseOverIcon, setIsMouseOverIcon] = useState(false);

  function renderIcon() {
    if (isMouseOverIcon) {
      return <Icon icon="trash-can" />;
    } else {
      if (instruction.type === "section") {
        return <Icon icon="square-small" />;
      } else {
        return instruction.stepNumber;
      }
    }
  }

  const placeholder =
    instruction.type.charAt(0).toUpperCase() + instruction.type.slice(1);

  return (
    <Styled.Item ref={sortable.setNodeRef} style={style}>
      <Styled.Icon
        onMouseEnter={() => setIsMouseOverIcon(true)}
        onMouseLeave={() => setIsMouseOverIcon(false)}
        onClick={instruction.remove}
      >
        {renderIcon()}
      </Styled.Icon>
      <Styled.Content
        fontWeight={instruction.type === "section" ? "bold" : "normal"}
      >
        <TextArea name={instruction.fieldName} placeholder={placeholder} />
      </Styled.Content>
      <Styled.Grip {...sortable.attributes} {...sortable.listeners}>
        <Icon icon="grip-vertical" />
      </Styled.Grip>
    </Styled.Item>
  );
}

export default InstructionItem;
