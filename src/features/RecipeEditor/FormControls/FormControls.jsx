import { useNavigate, useParams } from "react-router-dom";
import { useFormContext } from "react-hook-form";

import { useCreateRecipe } from "../../../hooks/useCreateRecipe";
import { useUpdateRecipe } from "../../../hooks/useUpdateRecipe";
import { useDeleteRecipe } from "../../../hooks/useDeleteRecipe";
import { ButtonPrimary, ButtonSecondary } from "../../../components/Button";
import * as Styled from "./FormControls.style";

function FormControls() {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const isNewRecipe = recipeId === "new";

  const { mutate: updateRecipe } = useUpdateRecipe();
  const { mutate: createRecipe } = useCreateRecipe();
  const { mutate: deleteRecipe } = useDeleteRecipe();

  const { getValues, handleSubmit } = useFormContext();

  function handleSaveEdits() {
    handleSubmit(({ originalRecipe, image, ...data }) => {
      const recipe = new FormData();

      if (typeof image !== "string") {
        recipe.append("image", image);
      }

      const ingredients = data.ingredients.map((ingredient, index) => ({
        ...ingredient,
        index,
      }));

      const instructions = data.instructions.map((instruction, index) => ({
        ...instruction,
        index,
      }));

      recipe.append(
        "data",
        JSON.stringify({ ...data, ingredients, instructions })
      );

      if (isNewRecipe) {
        createRecipe(recipe);
      } else {
        updateRecipe({ recipeId, recipe });
      }
    })();
  }

  function handleDeleteRecipe() {
    if (confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
    }
  }

  function handleDiscardEdits() {
    const { originalRecipe, ...editedRecipe } = getValues();

    if (originalRecipe !== JSON.stringify(editedRecipe)) {
      if (!confirm("Are you sure you want to discard your edits?")) {
        return;
      }
    }

    if (isNewRecipe) {
      navigate("/recipes");
    } else {
      navigate(`/recipes/${recipeId}`);
    }
  }

  return (
    <Styled.Container>
      <ButtonSecondary
        label="Discard"
        icon="left"
        onClick={handleDiscardEdits}
      />
      <ButtonPrimary
        label="Save"
        icon="floppy-disk"
        onClick={handleSaveEdits}
      />
      {!isNewRecipe && (
        <ButtonPrimary
          label="Delete"
          icon="trash-can"
          onClick={handleDeleteRecipe}
        />
      )}
    </Styled.Container>
  );
}

export default FormControls;
