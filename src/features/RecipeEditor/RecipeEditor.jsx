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
import * as Styled from "./RecipeEditor.styles";

function RecipeEditor() {
  const { recipeId } = useParams();

  const { data: recipe } = useGetRecipe(recipeId);

  return recipe || recipeId === "new" ? (
    <RecipeEditorProvider originalRecipe={recipe}>
      <Styled.Header>
        <ImagePicker />
        <div>
          <FormControls />
          <NameInput />
          <DescriptionInput />
          <ServingsInput />
          <TimePicker timeType="prep" />
          <TimePicker timeType="cook" />
          <RatingPicker />
          <CuisinePicker />
        </div>
      </Styled.Header>
      <Styled.Body>
        <IngredientList />
        <InstructionList />
      </Styled.Body>
    </RecipeEditorProvider>
  ) : null;
}

export default RecipeEditor;
