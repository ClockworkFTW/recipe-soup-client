import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
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
    grid-template-columns: minmax(1.25em, auto) auto;
    column-gap: 0.75em;
    border-radius: 0.5em;
    padding: ${$isFocused ? "0.625em" : "0.625em 0px"};
    background-color: ${$isFocused && colors.base100};
    transition: padding 200ms, background-color 200ms;
    :hover {
      cursor: pointer;
    }
  `}
`;

export const Number = styled.span`
  ${({ theme: { colors } }) => css`
    font-weight: bold;
    font-size: 1.125em;
    text-align: center;
    color: ${(props) => colors.primary400};
  `}
`;
