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
  const [recipe, dispatch] = useContext(RecipeEditorContext);

  const instructions = recipe.instructions.toSorted(
    (a, b) => a.index - b.index
  );

  function addInstruction() {
    dispatch({ type: "ADD_INSTRUCTION", index: recipe.instructions.length });
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
      <Button label="add" onClick={addInstruction} />
    </div>
  );
}

export default InstructionList;
