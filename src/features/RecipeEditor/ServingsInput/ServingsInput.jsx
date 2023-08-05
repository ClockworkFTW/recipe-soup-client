import {
  useServings,
  useRecipeEditorActions,
} from "../../../hooks/useRecipeEditor";

const ServingsInput = () => {
  const servings = useServings();
  const { updateServings } = useRecipeEditorActions();

  function handleServingsDecrement() {
    if (servings > 0) {
      updateServings(servings - 1);
    }
  }

  function handleServingsIncrement() {
    if (servings > 0) {
      updateServings(servings + 1);
    }
  }

  function handleServingsChange(event) {
    if (servings > 0) {
      updateServings(event.target.value);
    }
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
