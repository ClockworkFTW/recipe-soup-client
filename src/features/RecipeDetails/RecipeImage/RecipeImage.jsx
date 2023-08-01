import * as Styled from "./RecipeImage.styles";

const RecipeImage = ({ image }) => (
  <Styled.Image src={image.url} alt="recipe-image" />
);

export default RecipeImage;
