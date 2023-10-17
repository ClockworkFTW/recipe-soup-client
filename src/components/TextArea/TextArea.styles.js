import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Label = styled.label``;

export const Content = styled.div`
  ${({ theme: { colors }, $hasError, $isFocused }) => css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: ${$hasError ? colors.error100 : colors.neutral100};
    transition: box-shadow 200ms;
    font-weight: inherit;
    border-radius: 0.6em;
    box-shadow: 0 0 0 2px
      ${$isFocused
        ? $hasError
          ? colors.error400
          : colors.primary400
        : "white"};
    > span {
      z-index: 1;
      display: block;
      padding: 0.5rem 0.75rem;
      outline: none;
    }
  `}
`;

export const Placeholder = styled.div`
  ${({ theme: { colors }, $hasError }) => css`
    position: absolute;
    left: 0.75rem;
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
    padding-right: 0.5rem;
    font-size: 1.2rem;
    color: ${colors.error400};
  `}
`;
