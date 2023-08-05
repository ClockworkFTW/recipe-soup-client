import { useNavigate, useParams } from "react-router-dom";

import { useRecipeEditorState } from "../../../hooks/useRecipeEditor";
import { useCreateRecipe } from "../../../hooks/useCreateRecipe";
import { useUpdateRecipe } from "../../../hooks/useUpdateRecipe";
import { useDeleteRecipe } from "../../../hooks/useDeleteRecipe";
import Button from "../../../components/Button";

function FormControls() {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const { originalRecipe, editedRecipe } = useRecipeEditorState();

  const { mutate: updateRecipe } = useUpdateRecipe();
  const { mutate: createRecipe } = useCreateRecipe();
  const { mutate: deleteRecipe } = useDeleteRecipe();

  function handleSaveEdits() {
    const { image, ...data } = editedRecipe;

    const recipe = new FormData();

    if (typeof image !== "string") {
      recipe.append("image", image);
    }

    recipe.append("data", JSON.stringify(data));

    if (recipeId === "new") {
      createRecipe(recipe);
    } else {
      updateRecipe({ recipeId, recipe });
    }
  }

  function handleDeleteRecipe() {
    alert("are you sure you want to delete this recipe?");

    deleteRecipe(recipeId);
  }

  function handleDiscardEdits() {
    if (originalRecipe !== JSON.stringify(editedRecipe)) {
      alert("are you sure you want to discard your edits?");
    }

    if (recipeId) {
      navigate(`/recipes/${recipeId}`);
    } else {
      navigate("/recipes");
    }
  }

  return (
    <>
      <Button label="Discard" onClick={handleDiscardEdits} />
      <Button label="Save" onClick={handleSaveEdits} />
      <Button label="Delete" onClick={handleDeleteRecipe} />
    </>
  );
}

export default FormControls;
