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

  function handleDiscardEdits() {
    if (JSON.stringify(originalRecipe) !== JSON.stringify(editedRecipe)) {
      alert("are you sure you want to discard your edits?");
    }
    if (originalRecipe.id) {
      navigate(`/recipes/${originalRecipe.id}`);
    } else {
      navigate("/recipes");
    }
  }

  const { mutate: updateRecipe } = useUpdateRecipe();
  const { mutate: createRecipe } = useCreateRecipe();
  const { mutate: deleteRecipe } = useDeleteRecipe();

  function handleSaveEdits() {
    if (originalRecipe.id) {
      updateRecipe(editedRecipe);
    } else {
      createRecipe(editedRecipe);
    }
  }

  function handleDeleteRecipe() {
    alert("are you sure you want to delete this recipe?");
    deleteRecipe(originalRecipe);
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
