import { useState } from "react";
import { Controller } from "react-hook-form";
import ContentEditable from "react-contenteditable";

import Icon from "../Icon";
import Tooltip from "../Tooltip";
import * as Styled from "./TextArea.styles";

const TextArea = ({ autofocus = false, name, label, placeholder }) => {
  const [isFocused, setIsFocused] = useState(autofocus);

  return (
    <Controller
      name={name}
      render={({ field, fieldState }) => {
        const tooltipId = `${name.replace(/\./g, "-")}-error-tooltip`;

        function handleRef(event) {
          field.ref(event);
        }

        function handleBlur(event) {
          field.onBlur(event);
          setIsFocused(false);
        }

        function handleChange(event) {
          field.onChange(event);
        }

        function handleFocus() {
          setIsFocused(true);
        }

        return (
          <Styled.Container>
            {label && <Styled.Label>{label}</Styled.Label>}
            <Styled.Content $isFocused={isFocused} $hasError={fieldState.error}>
              {field.value === "" && placeholder && (
                <Styled.Placeholder $hasError={fieldState.error}>
                  {placeholder}
                </Styled.Placeholder>
              )}
              <ContentEditable
                innerRef={handleRef}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                html={field.value}
                tagName="span"
              />
              {fieldState.error && (
                <Styled.Error id={tooltipId}>
                  <Icon icon="circle-exclamation" />
                  <Tooltip
                    anchorSelect={`#${tooltipId}`}
                    content={fieldState.error.message}
                  />
                </Styled.Error>
              )}
            </Styled.Content>
          </Styled.Container>
        );
      }}
    />
  );
};

export default TextArea;
