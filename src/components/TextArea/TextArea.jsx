import { Controller } from "react-hook-form";
import ContentEditable from "react-contenteditable";

import * as Styled from "./TextArea.styles";

const TextArea = ({ name, label, placeholder }) => {
  return (
    <Styled.Container>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Controller
        name={name}
        render={({ field, fieldState }) => (
          <>
            <Styled.Content $hasError={fieldState.error}>
              {field.value === "" && placeholder && (
                <Styled.Placeholder>{placeholder}</Styled.Placeholder>
              )}
              <ContentEditable
                innerRef={field.ref}
                html={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            </Styled.Content>
            {fieldState.error && (
              <Styled.Error>{fieldState.error.message}</Styled.Error>
            )}
          </>
        )}
      />
    </Styled.Container>
  );
};

export default TextArea;
