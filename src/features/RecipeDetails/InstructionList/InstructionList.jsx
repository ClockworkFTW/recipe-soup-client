import { useState } from "react";

import * as Styled from "./InstructionList.style";

function InstructionList({ instructions }) {
  const [focusedStep, setFocusedStep] = useState(null);

  function handleInstructionClicked(index, type) {
    if (type === "step") {
      if (focusedStep === index) {
        setFocusedStep(null);
      } else {
        setFocusedStep(index);
      }
    }
  }

  function renderInstructionItem({ type, text, isFocused, stepNumber }) {
    switch (type) {
      case "section":
        return (
          <Styled.Section>
            <h6>{text}</h6>
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

  function renderInstructionList({ index, type, text }) {
    if (type === "section") {
      this.stepNumber = 0;
    } else {
      this.stepNumber += 1;
    }

    const opacity = focusedStep ? (focusedStep === index ? 1 : 0.4) : 1;

    const instructionItem = {
      type,
      text,
      stepNumber: this.stepNumber,
      isFocused: focusedStep && focusedStep === index,
    };

    return (
      <Styled.Instruction
        key={index}
        onClick={() => handleInstructionClicked(index, type)}
        $opacity={opacity}
      >
        {renderInstructionItem(instructionItem)}
      </Styled.Instruction>
    );
  }

  return (
    <div>
      <h4>Instructions</h4>
      <Styled.List>
        {instructions.map(renderInstructionList, { stepNumber: 0 })}
      </Styled.List>
    </div>
  );
}

export default InstructionList;
