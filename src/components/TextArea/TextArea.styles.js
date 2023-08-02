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
    outline: ${({ $hasErrors }) =>
      `2px solid ${$hasErrors ? "#f87171" : "#ffffff"}`};
    &:focus {
      outline: ${({ $hasErrors }) =>
        `2px solid ${$hasErrors ? "#f87171" : "#d1d5db"}`};
    }
  }
`;