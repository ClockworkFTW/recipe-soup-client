import { useParams } from "react-router-dom";

import { useGetRecipe } from "../../hooks/useGetRecipe";

import { RecipeEditorProvider } from "./RecipeEditor.context";

import FormControls from "./FormControls";
import RecipeName from "./RecipeName";
import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";

function RecipeEditor() {
  const { recipeId } = useParams();

  const { data: recipe } = useGetRecipe(recipeId);

  return recipe || recipeId === "new" ? (
    <RecipeEditorProvider originalRecipe={recipe}>
      <FormControls />
      <RecipeName />
      <IngredientList />
      <InstructionList />
    </RecipeEditorProvider>
  ) : null;
}

export default RecipeEditor;
