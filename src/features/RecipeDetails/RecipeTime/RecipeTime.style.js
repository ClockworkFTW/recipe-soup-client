import styled, { css } from "styled-components";

export const Container = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, auto);
  column-gap: 1rem;
  align-self: start;
  align-items: center;
  @media (max-width: 600px) {
    order: -1;
  }
`;

export const Spacer = styled.div`
  ${({ theme: { colors } }) => css`
    width: 2px;
    height: 100%;
    background: ${colors.neutral100};
  `}
`;
