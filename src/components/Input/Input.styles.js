import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: ${({ $hasIcon }) =>
    $hasIcon ? "auto 1fr auto" : "1fr auto"};
  border-radius: 0.6em;
  background-color: #f5f5f5;
  transition: border 0.2s, outline 0.2s;
  border: ${({ $isFocused, $hasError }) =>
    `1px solid ${$hasError ? "#ef4444" : $isFocused ? "#0ea5e9" : "#e5e5e5"}`};
  outline: ${({ $isFocused, $hasError }) =>
    `3px solid ${
      $hasError && $isFocused ? "#fecaca" : $isFocused ? "#bae6fd" : "#ffffff"
    }`};
  &:hover {
    border: ${({ $hasError }) =>
      `1px solid ${$hasError ? "#ef4444" : "#0ea5e9"}`};
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5em;
  font-size: 1.1rem;
  color: #d4d4d4;
  &:hover {
    cursor: text;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  border: none;
  outline: none;
  background: none;
  font-weight: inherit;
  &::placeholder {
    font-weight: normal;
    color: #a3a3a3;
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.5em;
  font-size: 1.2rem;
  color: #ef4444;
`;
