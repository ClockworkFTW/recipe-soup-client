import { useNavigate } from "react-router-dom";

import { ButtonPrimary } from "../../../components/Button";
import Icon from "../../../components/Icon";
import * as Styled from "./Empty.style";

function Empty() {
  const navigate = useNavigate();

  function handleAddRecipe() {
    navigate("/recipes/edit/new");
  }

  return (
    <Styled.Container>
      <Styled.Icon>
        <Icon icon="fork-knife" />
      </Styled.Icon>
      <h1>No recipes found</h1>
      <Styled.Button>
        <ButtonPrimary
          label="Add Recipe"
          icon="plus"
          onClick={handleAddRecipe}
        />
      </Styled.Button>
    </Styled.Container>
  );
}

export default Empty;
