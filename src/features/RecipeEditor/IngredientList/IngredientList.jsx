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
import * as Styled from "./IngredientList.styles";

function IngredientList() {
  const { editedRecipe, dispatch } = useContext(RecipeEditorContext);

  const ingredients = editedRecipe.ingredients.toSorted(
    (a, b) => a.index - b.index
  );

  function handleAddIngredient() {
    dispatch({
      type: "ADD_INGREDIENT",
      index: editedRecipe.ingredients.length,
    });
  }

  function handleReorderIngredients(event) {
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
                id={ingredient.id}
                ingredient={ingredient}
              />
            ))}
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
