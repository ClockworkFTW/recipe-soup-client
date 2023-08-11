import { useFieldArray } from "react-hook-form";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

import Button from "../../../components/Button";
import IngredientItem from "./IngredientItem";
import * as Styled from "./IngredientList.styles";

function IngredientList() {
  const { fields, append, move, remove } = useFieldArray({
    name: "ingredients",
  });

  function handleAddIngredient() {
    append({ text: "", index: 0 });
  }

  function handleReorderIngredients(event) {
    const { active, over } = event;

    if (active.id === over.id) return;

    const oldIndex = fields.findIndex(
      (ingredient) => ingredient.id === active.id
    );
    const newIndex = fields.findIndex(
      (ingredient) => ingredient.id === over.id
    );

    move(oldIndex, newIndex);
  }

  function renderIngredientList({ id, text }, index) {
    const ingredient = {
      id,
      text,
      index,
      fieldName: `ingredients.${index}.text`,
      remove: fields.length > 1 ? () => remove(index) : null,
    };

    return <IngredientItem key={id} ingredient={ingredient} />;
  }

  return (
    <div>
      <h2>Ingredients</h2>
      <Styled.List>
        <DndContext
          onDragEnd={handleReorderIngredients}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext
            items={fields}
            strategy={verticalListSortingStrategy}
          >
            {fields.map(renderIngredientList)}
          </SortableContext>
        </DndContext>
      </Styled.List>
      <Styled.Controls>
        <Button label="Add Ingredient" onClick={handleAddIngredient} />
      </Styled.Controls>
    </div>
  );
}

export default IngredientList;
