import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;

export const Content = styled.div`
  > span {
    display: block;
    padding: 10px;
    border-radius: 8px;
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
  }
`;
