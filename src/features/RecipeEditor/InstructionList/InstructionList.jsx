import { useFieldArray } from "react-hook-form";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

import Button from "../../../components/Button";
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

  function handleRemoveInstruction(index) {
    remove(index);
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
            {fields.map((item, index) => (
              <InstructionItem
                key={item.id}
                index={index}
                instruction={item}
                handleRemoveInstruction={handleRemoveInstruction}
              />
            ))}
          </SortableContext>
        </DndContext>
      </Styled.List>
      <Styled.Controls>
        <Button label="Add Section" onClick={handleAddInstructionSection} />
        <Button label="Add Step" onClick={handleAddInstructionStep} />
      </Styled.Controls>
    </div>
  );
}

export default InstructionList;
