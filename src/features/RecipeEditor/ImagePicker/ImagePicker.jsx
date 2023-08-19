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
    const file = event.target.files[0];
    if (file) {
      setValue("image", file);
      trigger("image");
    }
  }

  return (
    <Styled.Container>
      <Styled.Button $hasUrl={url} $hasError={error}>
        <Icon icon="pen" />
        <input type="file" onChange={handleImageChange} hidden />
      </Styled.Button>
      {url ? (
        <Styled.Image src={url} alt="recipe-image" />
      ) : (
        <Styled.Placeholder $hasError={error}>
          <Styled.Icon>
            <Icon icon="camera-retro" />
          </Styled.Icon>
        </Styled.Placeholder>
      )}
    </Styled.Container>
  );
};

export default ImagePicker;
