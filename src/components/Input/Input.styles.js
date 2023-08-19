import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  ${({ theme: { colors }, $hasError, $hasIcon, $isFocused }) => css`
    display: grid;
    grid-template-columns: auto 1fr ${$hasIcon && "auto"};
    border-radius: 0.6em;
    transition: border 200ms, box-shadow 200ms;
    background-color: ${colors.base100};
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
  `}
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
`;

export const Icon = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    padding-left: 0.5em;
    font-size: 1.1rem;
    color: ${colors.base300};
    &:hover {
      cursor: text;
    }
  `}
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  border: none;
  outline: none;
  background: none;
  font-weight: inherit;
  color: inherit;
  &::placeholder {
    font-weight: normal;
    color: #a3a3a3;
  }
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
