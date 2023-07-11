import { useContext } from "react";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { RecipeEditorContext } from "../RecipeEditor.context";

import Button from "../../../components/Button/Button";
import InstructionItem from "./InstructionItem";

function InstructionList() {
  const { editedRecipe, dispatch } = useContext(RecipeEditorContext);

  const instructions = editedRecipe.instructions.toSorted(
    (a, b) => a.index - b.index
  );

  function addInstructionSection() {
    dispatch({ type: "ADD_INSTRUCTION_SECTION" });
  }

  function addInstructionStep() {
    dispatch({ type: "ADD_INSTRUCTION_STEP" });
  }

  function reorderInstructions(event) {
    const { active, over } = event;

    if (active.id === over.id) return;

    const oldIndex = instructions.findIndex(
      (instruction) => instruction.id === active.id
    );
    const newIndex = instructions.findIndex(
      (instruction) => instruction.id === over.id
    );

    let newInstructions = arrayMove(instructions, oldIndex, newIndex);

    newInstructions = newInstructions.map((instruction, i) => ({
      ...instruction,
      index: i,
    }));

    dispatch({ type: "REORDER_INSTRUCTIONS", instructions: newInstructions });
  }

  return (
    <div>
      <h3>Instructions</h3>
      <DndContext
        onDragEnd={reorderInstructions}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          items={instructions}
          strategy={verticalListSortingStrategy}
        >
          {instructions.map((instruction) => (
            <InstructionItem
              key={instruction.id}
              id={instruction.id}
              instruction={instruction}
            />
          ))}
        </SortableContext>
      </DndContext>
      <Button label="add section" onClick={addInstructionSection} />
      <Button label="add step" onClick={addInstructionStep} />
    </div>
  );
}

export default InstructionList;
