import { useParams } from "react-router-dom";

import { useGetRecipe } from "../../hooks/useGetRecipe";

import { RecipeEditorProvider } from "./RecipeEditor.context";

import FormControls from "./FormControls";
import RecipeName from "./RecipeName";
import TimePicker from "./TimePicker";
import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";

function RecipeEditor() {
  const { recipeId } = useParams();

  const { data: recipe } = useGetRecipe(recipeId);

  return recipe || recipeId === "new" ? (
    <RecipeEditorProvider originalRecipe={recipe}>
      <FormControls />
      <RecipeName />
      <TimePicker timeType="prep" />
      <TimePicker timeType="cook" />
      <IngredientList />
      <InstructionList />
    </RecipeEditorProvider>
  ) : null;
}

export default RecipeEditor;
