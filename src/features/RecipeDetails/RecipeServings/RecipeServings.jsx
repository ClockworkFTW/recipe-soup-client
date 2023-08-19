import Counter from "../../../components/Counter";

const RecipeServings = ({ servings }) => {
  function handleDecrementServings() {
    return;
  }

  function handleIncrementServings() {
    return;
  }

  return (
    <Counter
      unit="servings"
      value={servings}
      decrementValue={handleDecrementServings}
      incrementValue={handleIncrementServings}
    />
  );
};

export default RecipeServings;
