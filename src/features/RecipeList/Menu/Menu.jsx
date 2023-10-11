import { useNavigate } from "react-router-dom";

import Query from "./Query";
import Sort from "./Sort";
import { ButtonPrimary } from "../../../components/Button/Button";
import * as Styled from "./Menu.style";

function Menu() {
  const navigate = useNavigate();

  function handleAddRecipe() {
    navigate("/recipes/edit/new");
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Query />
        <Sort />
        <ButtonPrimary
          label="Add Recipe"
          icon="plus"
          onClick={handleAddRecipe}
        />
      </Styled.Content>
    </Styled.Container>
  );
}

export default Menu;
