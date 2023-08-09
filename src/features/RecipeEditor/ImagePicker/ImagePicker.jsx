import { useFormContext } from "react-hook-form";

import Icon from "../../../components/Icon";
import * as Styled from "./ImagePicker.style";

const ImagePicker = () => {
  const { formState, getValues, setValue } = useFormContext();

  const image = getValues("image");
  const error = formState.errors["image"];

  const url = image
    ? typeof image === "string"
      ? image
      : URL.createObjectURL(image)
    : null;

  function handleImageChange(event) {
    setValue("image", event.target.files[0]);
  }

  return (
    <Styled.Container>
      <Styled.Button>
        <Icon icon="pen" />
        <input type="file" onChange={handleImageChange} hidden />
      </Styled.Button>
      {url ? (
        <Styled.Image src={url} alt="recipe-image" />
      ) : (
        <Styled.Placeholder>
          <Icon icon="camera-retro" />
        </Styled.Placeholder>
      )}
    </Styled.Container>
  );
};

export default ImagePicker;
