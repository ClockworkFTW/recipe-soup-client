import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Ingredient = styled.li`
  border-bottom: 1px solid #e5e5e5;
  :hover {
    cursor: pointer;
  }
`;

export const Text = styled.div`
  padding: 10px 0;
  transition: opacity 0.2s, text-decoration 0.2s;
  opacity: ${({ $isComplete }) => ($isComplete ? "0.4" : "1")};
  text-decoration: ${({ $isComplete }) =>
    `line-through ${$isComplete ? "currentcolor" : "transparent"}`};
`;
