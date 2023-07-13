import * as Styled from "./Flag.styles";

function Country({ code, label }) {
  return (
    <Styled.Container>
      <Styled.Flag
        src={`https://flagcdn.com/${code.toLowerCase()}.svg`}
        width="30"
        alt={label}
      />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
}

export default Country;
