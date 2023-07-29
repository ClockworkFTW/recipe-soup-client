import { useParams } from "react-router-dom";

import { useGetRecipe } from "../../hooks/useGetRecipe";

import { RecipeEditorProvider } from "./RecipeEditor.context";

import FormControls from "./FormControls";
import NameInput from "./NameInput";
import DescriptionInput from "./DescriptionInput";
import ImagePicker from "./ImagePicker";
import ServingsInput from "./ServingsInput";
import TimePicker from "./TimePicker";
import RatingPicker from "./RatingPicker";
import CuisinePicker from "./CuisinePicker";
import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";

function RecipeEditor() {
  const { recipeId } = useParams();

  const { data: recipe } = useGetRecipe(recipeId);

  return recipe || recipeId === "new" ? (
    <RecipeEditorProvider originalRecipe={recipe}>
      <FormControls />
      <NameInput />
      <DescriptionInput />
      <ImagePicker />
      <ServingsInput />
      <TimePicker timeType="prep" />
      <TimePicker timeType="cook" />
      <RatingPicker />
      <CuisinePicker />
      <IngredientList />
      <InstructionList />
    </RecipeEditorProvider>
  ) : null;
}

export default RecipeEditor;
