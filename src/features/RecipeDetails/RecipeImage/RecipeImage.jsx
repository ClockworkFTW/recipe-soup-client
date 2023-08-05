import * as Styled from "./RecipeImage.styles";

const RecipeImage = ({ image }) => (
  <Styled.Image src={image} alt="recipe-image" />
);

export default RecipeImage;
