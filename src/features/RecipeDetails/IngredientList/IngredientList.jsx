import { useState } from "react";

import * as Styled from "./IngredientList.styles";

const IngredientList = ({ ingredients }) => {
  const [completedIngredients, setCompletedIngredients] = useState([]);

  function handleIngredientClicked(id) {
    if (completedIngredients.includes(id)) {
      setCompletedIngredients(
        completedIngredients.filter((completedId) => completedId !== id)
      );
    } else {
      setCompletedIngredients((completedIds) => [...completedIds, id]);
    }
  }

  return (
    <div>
      <h2>Ingredients</h2>
      <Styled.List>
        {ingredients.map(({ id, text }) => (
          <Styled.Ingredient
            key={id}
            onClick={() => handleIngredientClicked(id)}
          >
            <Styled.Text $isComplete={completedIngredients.includes(id)}>
              {text}
            </Styled.Text>
          </Styled.Ingredient>
        ))}
      </Styled.List>
    </div>
  );
};

export default IngredientList;
