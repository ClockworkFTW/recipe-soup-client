import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const Content = styled.div`
  ${({ theme: { colors } }) => css`
    display: inline-grid;
    grid-template-columns: auto auto auto;
    border-radius: 0.6em;
    background-color: ${colors.neutral100};
  `}
`;

export const Button = styled.button`
  ${({ theme: { colors } }) => css`
    padding: 0.5rem;
    border: none;
    outline: none;
    background: none;
    color: ${colors.neutral400};
    &:hover {
      cursor: pointer;
    }
  `}
`;

export const Value = styled.span`
  padding: 0.5rem;
  white-space: nowrap;
`;
