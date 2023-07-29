import { useContext } from "react";

import { RecipeEditorContext } from "../RecipeEditor.context";

import Icon from "../../../components/Icon";

import * as Styled from "./ImagePicker.style";

const ImagePicker = () => {
  const { editedRecipe, dispatch } = useContext(RecipeEditorContext);

  const image = editedRecipe.image.url
    ? typeof editedRecipe.image.url === "string"
      ? editedRecipe.image.url
      : URL.createObjectURL(editedRecipe.image.url)
    : null;

  function handleImageChange(event) {
    dispatch({ type: "UPDATE_IMAGE", image: event.target.files[0] });
  }

  return (
    <div>
      <h3>Image</h3>
      <label>
        <Icon icon="pen" />
        <input type="file" onChange={handleImageChange} hidden />
      </label>
      {image && <Styled.Image src={image} alt="recipe-image" />}
    </div>
  );
};

export default ImagePicker;
