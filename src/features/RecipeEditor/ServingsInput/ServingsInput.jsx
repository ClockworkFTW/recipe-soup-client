import { useContext } from "react";

import { RecipeEditorContext } from "../RecipeEditor.context";

const ServingsInput = () => {
  const { editedRecipe, dispatch } = useContext(RecipeEditorContext);

  function updateServings(servings) {
    if (servings > 0) {
      dispatch({ type: "UPDATE_SERVINGS", servings });
    }
  }

  function handleServingsDecrement() {
    const servings = editedRecipe.servings - 1;
    updateServings(servings);
  }

  function handleServingsIncrement() {
    const servings = editedRecipe.servings + 1;
    updateServings(servings);
  }

  function handleServingsChange(event) {
    const servings = event.target.value;
    updateServings(servings);
  }

  return (
    <div>
      <h3>Servings</h3>
      <button onClick={handleServingsDecrement}>-</button>
      <input
        type="number"
        value={editedRecipe.servings}
        onChange={handleServingsChange}
      />
      <button onClick={handleServingsIncrement}>+</button>
    </div>
  );
};

export default ServingsInput;
