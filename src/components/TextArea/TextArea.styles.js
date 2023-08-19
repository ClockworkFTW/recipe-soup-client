import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Label = styled.label``;

export const Content = styled.div`
  ${({ theme: { colors }, $hasError, $isFocused }) => css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: ${colors.base100};
    transition: border 0.2s, box-shadow 0.2s;
    font-weight: inherit;
    border-radius: 0.6em;
    border: 2px solid
      ${$hasError
        ? colors.error400
        : $isFocused
        ? colors.primary400
        : colors.base200};
    box-shadow: 0 2px 6px
      ${$hasError && $isFocused
        ? colors.error200
        : $isFocused
        ? colors.primary200
        : "white"};
    &:hover {
      border: 2px solid ${$hasError ? colors.error400 : colors.primary400};
    }
    > span {
      z-index: 1;
      display: block;
      padding: 0.5em 0.75em;
      outline: none;
    }
  `}
`;

export const Placeholder = styled.div`
  ${({ theme: { colors } }) => css`
    position: absolute;
    left: 0.75em;
    top: 50%;
    transform: translateY(-50%);
    font-weight: normal;
    color: ${colors.base400};
  `}
`;

export const Error = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    padding-right: 0.5em;
    font-size: 1.2rem;
    color: ${colors.error500};
  `}
`;
