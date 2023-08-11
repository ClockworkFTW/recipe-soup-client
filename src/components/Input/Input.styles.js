import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-bottom: 20px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: ${({ $hasIcon }) => ($hasIcon ? "auto 1fr" : "1fr")};
  border-radius: 0.6em;
  background-color: #f5f5f5;
  transition: border 0.2s;
  border: ${({ $isFocused, $hasError }) =>
    `2px solid ${$hasError ? "#ef4444" : $isFocused ? "#22c55e" : "#ffffff"}`};
  &:hover {
    border: ${({ $isFocused, $hasError }) =>
      `2px solid ${
        $hasError ? "#ef4444" : $isFocused ? "#22c55e" : "#d1d5db"
      }`};
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0 0.5em 0.5em;
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
    color: #d4d4d4;
  }
`;

export const Error = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.8rem;
  font-weight: normal;
  color: #ef4444;
`;
