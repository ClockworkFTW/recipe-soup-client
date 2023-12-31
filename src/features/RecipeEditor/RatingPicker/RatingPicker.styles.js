import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme: { colors }, $isActive }) => css`
    padding: 0.25em;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.125rem;
    color: ${$isActive ? colors.yellow : colors.neutral200};
    transition: color 200ms;
    &:hover {
      cursor: pointer;
    }
  `}
`;
