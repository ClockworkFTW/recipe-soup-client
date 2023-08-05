import { useParams } from "react-router-dom";

import { useInitializeRecipeEditor } from "../../hooks/useRecipeEditor";
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

  const { isLoading, isError, isSuccess } = useInitializeRecipeEditor(recipeId);

  return isSuccess ? (
    <Styled.Container>
      <Styled.Header>
        <ImagePicker />
        <Styled.Content>
          <div>
            <CuisinePicker />
            <NameInput />
            <RatingPicker />
          </div>
          <TimePicker />
          <Styled.Menu>
            <FormControls />
          </Styled.Menu>
        </Styled.Content>
      </Styled.Header>
      <Styled.Body>
        <IngredientList />
        <InstructionList />
      </Styled.Body>
    </Styled.Container>
  ) : null;
}

export default RecipeEditor;
