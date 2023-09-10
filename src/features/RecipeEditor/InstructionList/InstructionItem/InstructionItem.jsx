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
    if (instruction.type === "section") {
      return <Icon icon="quote-left" />;
    } else {
      return instruction.stepNumber;
    }
  }

  return (
    <Styled.Item ref={sortable.setNodeRef} style={style}>
      <Styled.Bullet
        onMouseEnter={() => setIsMouseOverIcon(true)}
        onMouseLeave={() => setIsMouseOverIcon(false)}
        onClick={instruction.remove}
      >
        <Styled.Icon $opacity={isMouseOverIcon ? "1" : "0"}>
          <Icon icon="trash-can" />
        </Styled.Icon>
        <Styled.Icon $opacity={isMouseOverIcon ? "0" : "1"}>
          {renderIcon()}
        </Styled.Icon>
      </Styled.Bullet>
      <Styled.Content $isSection={instruction.type === "section"}>
        <TextArea name={instruction.fieldName} placeholder={instruction.type} />
      </Styled.Content>
      <Styled.Grip {...sortable.attributes} {...sortable.listeners}>
        <Icon icon="grip-vertical" />
      </Styled.Grip>
    </Styled.Item>
  );
}

export default InstructionItem;
