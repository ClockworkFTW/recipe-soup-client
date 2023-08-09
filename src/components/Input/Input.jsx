import { useRef, useState } from "react";

import Icon from "../Icon";
import * as Styled from "./Input.styles";

const Input = (props) => {
  const {
    name,
    label,
    icon,
    placeholder,
    register,
    errors,
    type,
    autoFocus = false,
  } = props;

  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(autoFocus);

  const { onChange, onBlur, ref } = register(name);
  const error = errors[name];

  function handleRef(event) {
    ref(event);
    inputRef.current = event;
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur(event) {
    onBlur(event);
    setIsFocused(false);
  }

  function handleIconClick() {
    inputRef.current.focus();
  }

  return (
    <Styled.Container>
      {label && <Styled.Label htmlFor={name}>{label}</Styled.Label>}
      <Styled.Content $isFocused={isFocused} $hasError={error} $hasIcon={icon}>
        {icon && (
          <Styled.Icon onClick={handleIconClick}>
            <Icon icon={icon} />
          </Styled.Icon>
        )}
        <Styled.Input
          ref={handleRef}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={autoFocus}
        />
      </Styled.Content>
      {error && <Styled.Error>{error.message}</Styled.Error>}
    </Styled.Container>
  );
};

export default Input;
