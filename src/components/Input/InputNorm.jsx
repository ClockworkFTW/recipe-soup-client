import { useRef, useState } from "react";

import Icon from "../Icon";
import Tooltip from "../Tooltip";
import * as Styled from "./Input.styles";

const InputNorm = (props) => {
  const {
    autoFocus = false,
    errors = {},
    icon,
    label,
    name,
    onChange,
    placeholder,
    type,
    value,
  } = props;

  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(autoFocus);
  const error = errors[name];

  function handleBlur() {
    setIsFocused(false);
  }

  function handleChange(event) {
    onChange(event.target.value);
  }

  function handleIconClick() {
    inputRef.current.focus();
  }

  function handleFocus() {
    setIsFocused(true);
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
          ref={inputRef}
          id={name}
          type={type}
          value={value}
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

export default InputNorm;
