import { useContext } from "react";

import { RecipeEditorContext } from "../RecipeEditor.context";

const DescriptionInput = () => {
  const { editedRecipe, dispatch } = useContext(RecipeEditorContext);

  function handleDescriptionChange(event) {
    dispatch({ type: "UPDATE_DESCRIPTION", description: event.target.value });
  }

  return (
    <div>
      <h3>Description</h3>
      <textarea
        type="text"
        value={editedRecipe.description}
        onChange={handleDescriptionChange}
      />
    </div>
  );
};

export default DescriptionInput;
