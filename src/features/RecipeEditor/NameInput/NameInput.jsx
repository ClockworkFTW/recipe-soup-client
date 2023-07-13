import { useContext } from "react";

import { RecipeEditorContext } from "../RecipeEditor.context";

const NameInput = () => {
  const { editedRecipe, dispatch } = useContext(RecipeEditorContext);

  function handleNameChange(event) {
    dispatch({ type: "UPDATE_NAME", name: event.target.value });
  }

  return (
    <div>
      <h3>Name</h3>
      <input
        type="text"
        value={editedRecipe.name}
        onChange={handleNameChange}
      />
    </div>
  );
};

export default NameInput;
