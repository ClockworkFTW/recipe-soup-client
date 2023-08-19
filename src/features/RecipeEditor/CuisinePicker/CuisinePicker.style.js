import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ $isSearching }) => css`
    position: ${$isSearching ? "relative" : "static"};
    width: 25%;
  `}
`;

export const Selection = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: ${colors.base100};
    border: 2px solid ${colors.base200};
    transition: border 0.2s;
    &:hover {
      cursor: pointer;
      border: 2px solid ${colors.primary400};
    }
  `}
`;

export const Options = styled.ul`
  ${({ theme: { colors } }) => css`
    z-index: 1;
    position: absolute;
    top: calc(100% + 0.75em);
    left: 0;
    right: 0;
    margin: 0;
    border-radius: 0.5em;
    border: 2px solid ${colors.base200};
    background-color: ${colors.base100};
  `}
`;

export const Option = styled.li`
  ${({ theme: { colors } }) => css`
    display: flex;
    margin: 0.375em;
    padding: 0.375em;
    border-radius: 0.25em;
    transition: background-color 0.2s;
    &:hover {
      cursor: pointer;
      background-color: ${colors.base200};
    }
  `}
`;
