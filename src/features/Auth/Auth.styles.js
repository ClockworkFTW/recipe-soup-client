import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 4em;
  border-radius: 0.75em;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: white;
`;

export const Input = styled.div`
  margin: 1em 0;
`;

export const Link = styled.span`
  ${({ theme: { colors } }) => css`
    > a {
      color: ${colors.primary500};
      text-decoration: none;
    }
  `}
`;

export const Button = styled.div`
  margin: 1em 0;
`;
