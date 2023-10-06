import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`;

export const Button = styled.button`
  ${({ theme: { colors }, $isActive }) => css`
    padding: 0.5em 0.75em;
    border-radius: 0.5em;
    border: none;
    color: ${$isActive ? "white" : colors.neutral800};
    background-color: ${$isActive ? colors.primary400 : "white"};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    transition: color 200ms, background-color 200ms;
    &:hover {
      cursor: pointer;
      color: white;
      background-color: ${colors.primary300};
    }
  `}
`;
