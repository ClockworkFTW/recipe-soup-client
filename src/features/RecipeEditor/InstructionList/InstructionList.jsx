import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { DndContext } from "@dnd-kit/core";

import {
  useInstructions,
  useRecipeEditorActions,
} from "../../../hooks/useRecipeEditor";
import Button from "../../../components/Button/Button";
import InstructionItem from "./InstructionItem";
import * as Styled from "./InstructionList.styles";

function InstructionList() {
  const instructions = useInstructions();
  const { addInstructionSection, addInstructionStep, updateInstructions } =
    useRecipeEditorActions();

  const sortedInstructions = instructions.toSorted((a, b) => a.index - b.index);

  function handleReorderInstructions(event) {
    const { active, over } = event;

    if (active.id === over.id) return;

    const oldIndex = sortedInstructions.findIndex(
      (instruction) => instruction.id === active.id
    );
    const newIndex = sortedInstructions.findIndex(
      (instruction) => instruction.id === over.id
    );

    let newInstructions = arrayMove(sortedInstructions, oldIndex, newIndex);

    newInstructions = newInstructions.map((instruction, i) => ({
      ...instruction,
      index: i,
    }));

    updateInstructions(newInstructions);
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
                sortableId={instruction.id}
                instruction={instruction}
              />
            ))}
          </SortableContext>
        </DndContext>
      </Styled.List>
      <Styled.Controls>
        <Button label="Add Section" onClick={addInstructionSection} />
        <Button label="Add Step" onClick={addInstructionStep} />
      </Styled.Controls>
    </div>
  );
}

export default InstructionList;
