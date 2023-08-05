import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  display: block;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #f5f5f5;
  transition: outline 0.2s;
  outline: ${({ $hasErrors }) =>
    `2px solid ${$hasErrors ? "#ef4444" : "#ffffff"}`};
  &:focus {
    outline: ${({ $hasErrors }) =>
      `2px solid ${$hasErrors ? "#ef4444" : "#d1d5db"}`};
  }
  &:hover {
    outline: ${({ $hasErrors }) =>
      `2px solid ${$hasErrors ? "#ef4444" : "#d1d5db"}`};
  }
`;

export const Error = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  color: #ef4444;
`;
