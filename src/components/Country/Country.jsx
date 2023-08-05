import * as Styled from "./Country.styles";

function Country({ code, label }) {
  return (
    <Styled.Container>
      <Styled.Flag
        src={`https://flagcdn.com/32x24/${code.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/64x48/${code.toLowerCase()}.png 2x, https://flagcdn.com/96x72/${code.toLowerCase()}.png 3x`}
        width="32"
        height="24"
        alt={label}
      />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
}

export default Country;
