import { useRef, useState } from "react";

import Icon from "../Icon";
import Tooltip from "../Tooltip";
import * as Styled from "./Input.styles";

const Input = (props) => {
  const {
    autoFocus,
    errors,
    icon,
    isControlled,
    label,
    name,
    onChange,
    placeholder,
    register,
    type,
    value,
  } = props;

  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(autoFocus);
  const error = errors[name];

  function handleFocus() {
    setIsFocused(true);
  }

  function handleIconClick() {
    inputRef.current.focus();
  }

  function renderControlledInput() {
    function handleBlur() {
      setIsFocused(false);
    }

    return (
      <Styled.Input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoFocus={autoFocus}
      />
    );
  }

  function renderUncontrolledInput() {
    const field = register(name);

    function handleRef(event) {
      field.ref(event);
      inputRef.current = event;
    }

    function handleBlur(event) {
      field.onBlur(event);
      setIsFocused(false);
    }

    return (
      <Styled.Input
        ref={handleRef}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={field.onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoFocus={autoFocus}
      />
    );
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
        {isControlled ? renderControlledInput() : renderUncontrolledInput()}
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

export default Input;
