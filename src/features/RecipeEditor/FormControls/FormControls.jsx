import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateRecipe } from "../../../hooks/useCreateRecipe";
import { useUpdateRecipe } from "../../../hooks/useUpdateRecipe";
import { useDeleteRecipe } from "../../../hooks/useDeleteRecipe";

import { RecipeEditorContext } from "../RecipeEditor.context";

import Button from "../../../components/Button";

function FormControls() {
  const navigate = useNavigate();

  const { originalRecipe, editedRecipe } = useContext(RecipeEditorContext);

  const recipeId = originalRecipe.id;

  const { mutate: updateRecipe } = useUpdateRecipe();
  const { mutate: createRecipe } = useCreateRecipe();
  const { mutate: deleteRecipe } = useDeleteRecipe();

  function formatRecipe() {
    const formData = new FormData();
    const { image, ...data } = editedRecipe;
    if (typeof image.url !== "string") {
      formData.append("image", image.url);
    }
    formData.append("data", JSON.stringify(data));
    return formData;
  }

  function handleSaveEdits() {
    const recipe = formatRecipe();
    if (recipeId) {
      updateRecipe({ recipeId, recipe });
    } else {
      createRecipe(recipe);
    }
  }

  function handleDeleteRecipe() {
    alert("are you sure you want to delete this recipe?");
    deleteRecipe(recipeId);
  }

  function handleDiscardEdits() {
    if (JSON.stringify(originalRecipe) !== JSON.stringify(editedRecipe)) {
      alert("are you sure you want to discard your edits?");
    }
    if (recipeId) {
      navigate(`/recipes/${recipeId}`);
    } else {
      navigate("/recipes");
    }
  }

  return (
    <div>
      <Button label="Discard" onClick={handleDiscardEdits} />
      <Button label="Save" onClick={handleSaveEdits} />
      <Button label="Delete" onClick={handleDeleteRecipe} />
    </div>
  );
}

export default FormControls;
