import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1em;
  border-radius: 0.75em;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: white;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const Input = styled.input`
  ${({ theme: { colors } }) => css`
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

export const Button = styled.button`
  ${({ theme: { colors }, $isActive }) => css`
    padding: 0.5em 0.75em;
    border-radius: 0.5em;
    border: none;
    color: ${$isActive ? "white" : colors.neutral800};
    background-color: ${$isActive ? colors.primary400 : colors.neutral100};
    transition: color 200ms, background-color 200ms;
    > svg {
      color: ${$isActive ? "white" : colors.neutral400};
      transition: color 200ms;
    }
    &:hover {
      cursor: pointer;
      color: white;
      background-color: ${colors.primary300};
      > svg {
        color: white;
      }
    }
  `}
`;
