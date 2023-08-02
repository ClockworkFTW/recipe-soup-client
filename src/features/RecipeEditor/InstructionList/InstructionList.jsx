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
import * as Styled from "./InstructionList.styles";

function InstructionList() {
  const { editedRecipe, dispatch } = useContext(RecipeEditorContext);

  const instructions = editedRecipe.instructions.toSorted(
    (a, b) => a.index - b.index
  );

  function handleAddInstructionSection() {
    dispatch({ type: "ADD_INSTRUCTION_SECTION" });
  }

  function handleAddInstructionStep() {
    dispatch({ type: "ADD_INSTRUCTION_STEP" });
  }

  function handleReorderInstructions(event) {
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
      <h2>Instructions</h2>
      <Styled.List>
        <DndContext
          onDragEnd={handleReorderInstructions}
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
      </Styled.List>
      <Styled.Controls>
        <Button label="Add Section" onClick={handleAddInstructionSection} />
        <Button label="Add Step" onClick={handleAddInstructionStep} />
      </Styled.Controls>
    </div>
  );
}

export default InstructionList;
