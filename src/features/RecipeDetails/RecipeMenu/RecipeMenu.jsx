import { useNavigate } from "react-router-dom";

import { ButtonPrimary, ButtonSecondary } from "../../../components/Button";
import * as Styled from "./RecipeMenu.style";

function RecipeMenu({ recipeId }) {
  const navigate = useNavigate();

  function editRecipe() {
    navigate(`/recipes/edit/${recipeId}`);
  }

  function shareRecipe() {
    alert("Share");
  }

  function printRecipe() {
    alert("Print");
  }

  return (
    <Styled.Container>
      <ButtonSecondary label="Share" icon="share" onClick={shareRecipe} />
      <ButtonSecondary label="Print" icon="print" onClick={printRecipe} />
      <ButtonPrimary label="Edit" icon="pen" onClick={editRecipe} />
    </Styled.Container>
  );
}

export default RecipeMenu;
