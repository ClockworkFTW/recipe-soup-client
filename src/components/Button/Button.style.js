import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme: { colors } }) => css`
    padding: 0.5em 0.75em;
    border-radius: 0.5em;
    border: none;
    color: white;
    background-color: ${colors.primary400};
    transition: background-color 200ms;
    &:hover {
      cursor: pointer;
      background-color: ${colors.primary300};
    }
  `}
`;
