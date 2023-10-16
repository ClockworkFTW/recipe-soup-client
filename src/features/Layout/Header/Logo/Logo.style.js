import styled, { css } from "styled-components";

export const Container = styled.h1`
  font-size: 2em;
  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.span`
  ${({ $isOnMainPage }) => css`
    margin-left: ${$isOnMainPage ? "0" : "0.25em"};
  `}
`;

export const Highlight = styled.span`
  ${({ theme: { colors } }) => css`
    color: ${colors.primary400};
  `}
`;
