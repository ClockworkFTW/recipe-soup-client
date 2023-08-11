import Icon from "../Icon";
import * as Styled from "./Counter.styles";

const Counter = ({ label, unit, value, decrementValue, incrementValue }) => (
  <Styled.Container>
    {label && <Styled.Label>Servings</Styled.Label>}
    <Styled.Content>
      <Styled.Button onClick={decrementValue}>
        <Icon icon="minus" />
      </Styled.Button>
      <Styled.Value>
        {value}
        {unit && ` ${unit}`}
      </Styled.Value>
      <Styled.Button onClick={incrementValue}>
        <Icon icon="plus" />
      </Styled.Button>
    </Styled.Content>
  </Styled.Container>
);

export default Counter;
