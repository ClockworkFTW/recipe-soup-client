import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  @media (max-width: 800px) {
    padding: 1em 1em 0 1em;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  column-gap: 1em;
`;

export const Main = styled.main`
  padding: 2em;
  @media (max-width: 800px) {
    padding: 1em;
  }
`;

export const Footer = styled.footer`
  padding: 2em;
  text-align: center;
`;
