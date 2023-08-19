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
  margin-bottom: 2em;
  padding: 2em 4em;
`;

export const Main = styled.main`
  ${({ theme: { colors } }) => css`
    padding: 4em;
    border-radius: 0.75em;
    border: 2px solid ${colors.base200};
    background-color: white;
  `}
`;

export const Footer = styled.footer`
  margin-top: 2em;
  padding: 2em 4em;
  text-align: center;
`;
