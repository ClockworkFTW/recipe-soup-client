import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Label = styled.label``;

export const Content = styled.div`
  ${({ theme: { colors }, $hasError, $isFocused }) => css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: ${$hasError ? colors.error100 : colors.neutral100};
    transition: outline 200ms;
    font-weight: inherit;
    border-radius: 0.6em;
    outline: 2px solid
      ${$isFocused
        ? $hasError
          ? colors.error400
          : colors.primary400
        : "white"};
    > span {
      z-index: 1;
      display: block;
      padding: 0.5em 0.75em;
      outline: none;
    }
  `}
`;

export const Placeholder = styled.div`
  ${({ theme: { colors }, $hasError }) => css`
    position: absolute;
    left: 0.75em;
    top: 50%;
    transform: translateY(-50%);
    font-weight: normal;
    color: ${$hasError ? colors.error400 : colors.neutral400};
    text-transform: capitalize;
  `}
`;

export const Error = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    padding-right: 0.5em;
    font-size: 1.2rem;
    color: ${colors.error400};
  `}
`;
