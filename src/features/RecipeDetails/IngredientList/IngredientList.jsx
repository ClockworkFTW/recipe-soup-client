import { useState } from "react";

import * as Styled from "./IngredientList.styles";

const IngredientList = ({ ingredients }) => {
  const [completedIngredients, setCompletedIngredients] = useState([]);

  function handleIngredientClicked(index) {
    if (completedIngredients.includes(index)) {
      setCompletedIngredients(
        completedIngredients.filter(
          (completedIndex) => completedIndex !== index
        )
      );
    } else {
      setCompletedIngredients((completedIndices) => [
        ...completedIndices,
        index,
      ]);
    }
  }

  return (
    <div>
      <h4>Ingredients</h4>
      <Styled.List>
        {ingredients.map(({ index, text }) => (
          <Styled.Ingredient
            key={index}
            onClick={() => handleIngredientClicked(index)}
          >
            <Styled.Text $isComplete={completedIngredients.includes(index)}>
              {text}
            </Styled.Text>
          </Styled.Ingredient>
        ))}
      </Styled.List>
    </div>
  );
};

export default IngredientList;
