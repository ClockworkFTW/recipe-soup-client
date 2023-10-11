import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme: { colors } }) => css`
    width: 100%;
    padding: 0.5em;
    border-radius: 0.5em;
    border: none;
    outline: none;
    background: none;
    font-weight: inherit;
    color: inherit;
    background-color: ${colors.neutral100};
    transition: outline 200ms;
    outline: 2px solid white;
    &:focus {
      outline: 2px solid ${colors.primary400};
    }
    &::placeholder {
      font-weight: normal;
      color: ${colors.neutral400};
    }
  `}
`;
