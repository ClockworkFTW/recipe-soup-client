import Time from "../../../components/Time";
import * as Styled from "./RecipeTime.style";

function RecipeTime({ prepTime, cookTime }) {
  return (
    <Styled.Container>
      <Time label="Prep" values={[prepTime]} />
      <Styled.Spacer />
      <Time label="Cook" values={[cookTime]} />
      <Styled.Spacer />
      <Time label="Total" values={[prepTime, cookTime]} />
    </Styled.Container>
  );
}

export default RecipeTime;
