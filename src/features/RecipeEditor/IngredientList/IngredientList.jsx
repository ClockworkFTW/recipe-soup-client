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
import IngredientItem from "./IngredientItem";

function IngredientList() {
  const [recipe, dispatch] = useContext(RecipeEditorContext);

  const ingredients = recipe.ingredients.toSorted((a, b) => a.index - b.index);

  function addIngredient() {
    dispatch({ type: "ADD_INGREDIENT", index: recipe.ingredients.length });
  }

  function reorderIngredients(event) {
    const { active, over } = event;

    if (active.id === over.id) return;

    const oldIndex = ingredients.findIndex(
      (ingredient) => ingredient.id === active.id
    );
    const newIndex = ingredients.findIndex(
      (ingredient) => ingredient.id === over.id
    );

    let newIngredients = arrayMove(ingredients, oldIndex, newIndex);

    newIngredients = newIngredients.map((ingredient, i) => ({
      ...ingredient,
      index: i,
    }));

    dispatch({ type: "REORDER_INGREDIENTS", ingredients: newIngredients });
  }

  return (
    <div>
      <h3>Ingredients</h3>
      <DndContext
        onDragEnd={reorderIngredients}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          items={ingredients}
          strategy={verticalListSortingStrategy}
        >
          {ingredients.map((ingredient) => (
            <IngredientItem
              key={ingredient.id}
              id={ingredient.id}
              ingredient={ingredient}
            />
          ))}
        </SortableContext>
      </DndContext>
      <Button label="add" onClick={addIngredient} />
    </div>
  );
}

export default IngredientList;
