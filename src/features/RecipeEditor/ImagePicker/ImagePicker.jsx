import { useFormContext, useWatch } from "react-hook-form";

import Icon from "../../../components/Icon";
import * as Styled from "./ImagePicker.style";

const ImagePicker = () => {
  const { formState, setValue, trigger } = useFormContext();

  const image = useWatch({ name: "image" });
  const error = formState.errors["image"];

  const url = image
    ? typeof image === "string"
      ? image
      : URL.createObjectURL(image)
    : null;

  function handleImageChange(event) {
    setValue("image", event.target.files[0]);
    trigger("image");
  }

  return (
    <Styled.Container>
      <Styled.Button $hasError={error}>
        <Icon icon="pen" />
        <input type="file" onChange={handleImageChange} hidden />
      </Styled.Button>
      {url ? (
        <Styled.Image src={url} alt="recipe-image" />
      ) : (
        <Styled.Placeholder $hasError={error}>
          <Icon icon="camera-retro" />
        </Styled.Placeholder>
      )}
    </Styled.Container>
  );
};

export default ImagePicker;
