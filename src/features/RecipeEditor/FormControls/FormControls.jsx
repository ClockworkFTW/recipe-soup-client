import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getRecipe } from "../../api/recipe";

import { RecipeEditorContext } from "../RecipeEditor.context";

import Button from "../../components/Button";

function FormControls() {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const [editedRecipe] = useContext(RecipeEditorContext);

  const originalRecipe = useQuery({
    queryKey: ["recipes", recipeId],
    queryFn: () => getRecipe(recipeId),
  });

  function discardEdits() {
    navigate(`/recipes/${recipeId}`);
  }

  function saveRecipe() {
    alert("saving...");
  }

  return (
    <div>
      <Button label="Discard" onClick={discardEdits} />
      <Button label="Save" onClick={saveRecipe} />
    </div>
  );
}

export default FormControls;
