import styled, { css } from "styled-components";

export const Item = styled.li`
  display: grid;
  grid-template-columns: minmax(1.25em, auto) 1fr auto;
  column-gap: 0.75em;
  margin-bottom: 1em;
`;

export const Icon = styled.span`
  ${({ theme: { colors } }) => css`
    padding: 0.25em 0;
    font-weight: bold;
    text-align: center;
    color: ${colors.primary400};
    &:hover {
      cursor: pointer;
      color: ${colors.base200};
    }
  `}
`;

export const Grip = styled.span`
  ${({ theme: { colors } }) => css`
    padding: 0.25em;
    color: ${colors.base200};
    &:hover {
      cursor: grab;
    }
  `}
`;
