import styled, { css } from "styled-components";

export const List = styled.ul`
  margin-top: 1rem;
  list-style-type: none;
  :last-child {
    border: none;
  }
`;

export const Ingredient = styled.li`
  ${({ theme: { colors } }) => css`
    border-bottom: 2px solid ${colors.neutral100};
    :hover {
      cursor: pointer;
    }
  `}
`;

export const Text = styled.div`
  ${({ $isComplete }) => css`
    padding: 0.75rem 0;
    transition: opacity 200ms, text-decoration 200ms;
    opacity: ${$isComplete ? "0.4" : "1"};
    text-decoration: line-through
      ${$isComplete ? "currentcolor" : "transparent"};
  `}
`;
