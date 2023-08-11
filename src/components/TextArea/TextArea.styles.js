import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.label``;

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #f5f5f5;
  font-weight: inherit;
  border-radius: 0.6em;
  transition: border 0.2s, outline 0.2s;
  border: ${({ $hasError, $isFocused }) =>
    `1px solid ${$hasError ? "#ef4444" : $isFocused ? "#0ea5e9" : "#e5e5e5"}`};
  outline: ${({ $hasError, $isFocused }) =>
    `3px solid ${
      $hasError && $isFocused ? "#fecaca" : $isFocused ? "#bae6fd" : "#ffffff"
    }`};
  &:hover {
    border: ${({ $hasError }) =>
      `1px solid ${$hasError ? "#ef4444" : "#0ea5e9"}`};
  }
  > span {
    z-index: 1;
    display: block;
    padding: 0.5em;
    outline: none;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  left: 0.5em;
  top: 50%;
  transform: translateY(-50%);
  font-weight: normal;
  color: #a3a3a3;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.5em;
  font-size: 1.2rem;
  color: #ef4444;
`;
