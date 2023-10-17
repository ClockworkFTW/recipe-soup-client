import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  ${({ theme: { colors }, $hasError, $hasIcon, $isFocused }) => css`
    display: grid;
    grid-template-columns: ${$hasIcon && $hasError
      ? "auto 1fr auto"
      : $hasIcon
      ? "auto 1fr"
      : $hasError
      ? "1fr auto"
      : "1fr"};
    border-radius: 0.5rem;
    background-color: ${$hasError ? colors.error100 : colors.neutral100};
    transition: box-shadow 200ms;
    box-shadow: 0 0 0 2px
      ${$isFocused
        ? $hasError
          ? colors.error400
          : colors.primary400
        : "white"};
  `}
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const Icon = styled.div`
  ${({ theme: { colors }, $hasError }) => css`
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    font-size: 1.1rem;
    color: ${$hasError ? colors.error400 : colors.neutral400};
    &:hover {
      cursor: text;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme: { colors }, $hasError }) => css`
    width: 100%;
    padding: 0.5rem;
    border: none;
    outline: none;
    background: none;
    font-weight: inherit;
    color: inherit;
    &::placeholder {
      font-weight: normal;
      color: ${$hasError ? colors.error400 : colors.neutral400};
    }
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
