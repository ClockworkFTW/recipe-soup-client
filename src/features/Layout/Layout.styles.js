import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
`;

export const Logo = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 2em;
    > a {
      text-decoration: none;
      color: ${colors.neutral800};
    }
  `}
`;

export const Main = styled.main`
  padding: 2em;
`;

export const Footer = styled.footer`
  padding: 2em;
  text-align: center;
`;
