import { cuisines } from "./cuisines";
import * as Styled from "./Cuisine.style";

function Cuisine({ cuisine }) {
  const { code, name } = cuisines.find((c) => c.name === cuisine) || {};

  const src = `https://flagcdn.com/32x24/${code}.png`;
  const srcset = `https://flagcdn.com/64x48/${code}.png 2x, https://flagcdn.com/96x72/${code}.png 3x`;

  return (
    <Styled.Container>
      <Styled.Flag
        src={src}
        srcSet={srcset}
        width="32"
        height="24"
        alt={name}
      />
      <Styled.Label>{name}</Styled.Label>
    </Styled.Container>
  );
}

export default Cuisine;
