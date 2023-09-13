import { useRef, useState } from "react";

import Icon from "../Icon";
import Tooltip from "../Tooltip";
import * as Styled from "./Input.styles";

const InputForm = (props) => {
  const {
    autoFocus = false,
    errors = {},
    icon,
    label,
    name,
    placeholder,
    register,
    type,
  } = props;

  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(autoFocus);
  const { ref, onBlur, onChange } = register(name);
  const error = errors[name];

  function handleBlur(event) {
    onBlur(event);
    setIsFocused(false);
  }

  function handleChange(event) {
    onChange(event);
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleIconClick() {
    inputRef.current.focus();
  }

  function handleRef(event) {
    ref(event);
    inputRef.current = event;
  }

  return (
    <Styled.Container>
      {label && <Styled.Label htmlFor={name}>{label}</Styled.Label>}
      <Styled.Content $isFocused={isFocused} $hasError={error} $hasIcon={icon}>
        {icon && (
          <Styled.Icon $hasError={error} onClick={handleIconClick}>
            <Icon icon={icon} />
          </Styled.Icon>
        )}
        <Styled.Input
          ref={handleRef}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={autoFocus}
          $hasError={error}
        />
        {error && (
          <Styled.Error id={`${name}-error-tooltip`}>
            <Icon icon="circle-exclamation" />
            <Tooltip
              anchorSelect={`#${name}-error-tooltip`}
              content={error.message}
            />
          </Styled.Error>
        )}
      </Styled.Content>
    </Styled.Container>
  );
};

export default InputForm;
