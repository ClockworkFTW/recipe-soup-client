import { useState } from "react";

import * as Styled from "./InstructionList.style";

function InstructionList({ instructions }) {
  const [focusedStep, setFocusedStep] = useState(null);

  function handleInstructionClicked(id, type) {
    if (type === "step") {
      if (focusedStep === id) {
        setFocusedStep(null);
      } else {
        setFocusedStep(id);
      }
    }
  }

  function renderInstructionItem({ type, text, isFocused, stepNumber }) {
    switch (type) {
      case "section":
        return (
          <Styled.Section>
            <h3>{text}</h3>
          </Styled.Section>
        );
      case "step":
        return (
          <Styled.Step $isFocused={isFocused}>
            <Styled.Number>{stepNumber}</Styled.Number>
            <span>{text}</span>
          </Styled.Step>
        );
      default:
        return null;
    }
  }

  function renderInstructionList({ id, type, text }) {
    if (type === "section") {
      this.stepNumber = 0;
    } else {
      this.stepNumber += 1;
    }

    const opacity = focusedStep ? (focusedStep === id ? 1 : 0.4) : 1;

    const instructionItem = {
      type,
      text,
      stepNumber: this.stepNumber,
      isFocused: focusedStep && focusedStep === id,
    };

    return (
      <Styled.Instruction
        key={id}
        onClick={() => handleInstructionClicked(id, type)}
        $opacity={opacity}
      >
        {renderInstructionItem(instructionItem)}
      </Styled.Instruction>
    );
  }

  return (
    <div>
      <h2>Instructions</h2>
      <Styled.List>
        {instructions.map(renderInstructionList, { stepNumber: 0 })}
      </Styled.List>
    </div>
  );
}

export default InstructionList;
