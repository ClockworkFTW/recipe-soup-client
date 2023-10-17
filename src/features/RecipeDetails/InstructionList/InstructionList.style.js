import styled, { css } from "styled-components";

export const List = styled.ul`
  margin-top: 1rem;
  list-style-type: none;
`;

export const Instruction = styled.li`
  ${({ $opacity }) => css`
    opacity: ${$opacity};
    transition: opacity 200ms;
  `}
`;

export const Section = styled.div`
  font-weight: 700;
`;

export const Step = styled.div`
  ${({ theme: { colors }, $isFocused }) => css`
    display: inline-grid;
    grid-template-columns: minmax(1.25rem, auto) auto;
    column-gap: 0.75rem;
    border-radius: 0.5rem;
    padding: ${$isFocused ? "0.5rem" : "0.5rem 0px"};
    background-color: ${$isFocused && colors.neutral100};
    transition: padding 200ms, background-color 200ms;
    :hover {
      cursor: pointer;
    }
  `}
`;

export const Number = styled.span`
  ${({ theme: { colors } }) => css`
    font-weight: bold;
    text-align: center;
    font-size: 1.125rem;
    color: ${colors.primary400};
  `}
`;
