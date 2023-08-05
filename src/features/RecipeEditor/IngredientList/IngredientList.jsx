import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { DndContext } from "@dnd-kit/core";

import {
  useIngredients,
  useRecipeEditorActions,
} from "../../../hooks/useRecipeEditor";
import Button from "../../../components/Button/Button";
import IngredientItem from "./IngredientItem";
import * as Styled from "./IngredientList.styles";

function IngredientList() {
  const ingredients = useIngredients();
  const { addIngredient, updateIngredients } = useRecipeEditorActions();

  const sortedIngredients = ingredients.toSorted((a, b) => a.index - b.index);

  function handleReorderIngredients(event) {
    const { active, over } = event;

    if (active.id === over.id) return;

    const oldIndex = sortedIngredients.findIndex(
      (ingredient) => ingredient.id === active.id
    );
    const newIndex = sortedIngredients.findIndex(
      (ingredient) => ingredient.id === over.id
    );

    let newIngredients = arrayMove(sortedIngredients, oldIndex, newIndex);

    newIngredients = newIngredients.map((ingredient, i) => ({
      ...ingredient,
      index: i,
    }));

    updateIngredients(newIngredients);
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
            items={ingredients}
            strategy={verticalListSortingStrategy}
          >
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                sortableId={ingredient.id}
                ingredient={ingredient}
              />
            ))}
          </SortableContext>
        </DndContext>
      </Styled.List>
      <Styled.Controls>
        <Button label="Add Ingredient" onClick={addIngredient} />
      </Styled.Controls>
    </div>
  );
}

export default IngredientList;
