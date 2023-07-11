import { useContext } from "react";

import { RecipeEditorContext } from "../RecipeEditor.context";

function RecipeName() {
  const { editedRecipe, dispatch } = useContext(RecipeEditorContext);

  function handleNameChange(event) {
    dispatch({ type: "UPDATE_NAME", name: event.target.value });
  }

  return (
    <div>
      <input
        type="text"
        value={editedRecipe.name}
        onChange={handleNameChange}
      />
    </div>
  );
}

export default RecipeName;
