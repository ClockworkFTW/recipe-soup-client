import Icon from "../../../components/Icon";
import * as Styled from "./Empty.style";

function Empty() {
  return (
    <Styled.Container>
      <Styled.Icon>
        <Icon icon="fork-knife" />
      </Styled.Icon>
      <h1>No recipes found</h1>
    </Styled.Container>
  );
}

export default Empty;
