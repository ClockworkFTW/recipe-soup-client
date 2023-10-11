import { useFieldArray } from "react-hook-form";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

import { ButtonPrimary } from "../../../components/Button";
import InstructionItem from "./InstructionItem";
import * as Styled from "./InstructionList.styles";

function InstructionList() {
  const { fields, append, move, remove } = useFieldArray({
    name: "instructions",
  });

  function handleAddInstructionSection() {
    append({ text: "", type: "section" });
  }

  function handleAddInstructionStep() {
    append({ text: "", type: "step" });
  }

  function handleReorderInstructions(event) {
    const { active, over } = event;

    if (active.id === over.id) return;

    const oldIndex = fields.findIndex(
      (instruction) => instruction.id === active.id
    );
    const newIndex = fields.findIndex(
      (instruction) => instruction.id === over.id
    );

    move(oldIndex, newIndex);
  }

  function renderInstructionList({ id, type, text }, index) {
    if (type === "section") {
      this.stepNumber = 0;
    } else {
      this.stepNumber += 1;
    }

    const instruction = {
      id,
      type,
      text,
      stepNumber: this.stepNumber,
      fieldName: `instructions.${index}.text`,
      remove: fields.length > 1 ? () => remove(index) : null,
    };

    return <InstructionItem key={id} instruction={instruction} />;
  }

  return (
    <div>
      <h2>Instructions</h2>
      <Styled.List>
        <DndContext
          onDragEnd={handleReorderInstructions}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext
            items={fields}
            strategy={verticalListSortingStrategy}
          >
            {fields.map(renderInstructionList, { stepNumber: 0 })}
          </SortableContext>
        </DndContext>
      </Styled.List>
      <Styled.Controls>
        <ButtonPrimary
          label="Add Section"
          onClick={handleAddInstructionSection}
        />
        <ButtonPrimary label="Add Step" onClick={handleAddInstructionStep} />
      </Styled.Controls>
    </div>
  );
}

export default InstructionList;
