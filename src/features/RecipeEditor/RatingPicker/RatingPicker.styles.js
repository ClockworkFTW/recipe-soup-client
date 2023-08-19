import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme: { colors }, $isActive }) => css`
    padding: 0.25em;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.125em;
    color: ${$isActive ? colors.yellow : colors.base200};
    transition: color 200ms;
    &:hover {
      cursor: pointer;
    }
  `}
`;
