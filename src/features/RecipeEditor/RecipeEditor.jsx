import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getRecipe } from "../../api/recipe";

import { RecipeEditorProvider } from "./RecipeEditor.context";

import Button from "../../components/Button";

import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";

function RecipeEditor() {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const recipe = useQuery({
    queryKey: ["recipes", recipeId],
    queryFn: () => getRecipe(recipeId),
  });

  function discardEdits() {
    navigate(`/recipes/${recipeId}`);
  }

  function saveRecipe() {
    alert("saving...");
  }

  return recipe.data ? (
    <RecipeEditorProvider initialState={recipe.data}>
      <Button label="Discard" onClick={discardEdits} />
      <Button label="Save" onClick={saveRecipe} />
      <h2>{recipe.data.name}</h2>
      <IngredientList />
      <InstructionList />
    </RecipeEditorProvider>
  ) : null;
}

export default RecipeEditor;
