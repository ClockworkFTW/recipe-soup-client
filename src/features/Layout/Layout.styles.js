import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f5f5f5;
`;

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
  margin-bottom: 30px;
  padding: 30px 60px;
`;

export const Main = styled.main`
  padding: 60px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
`;

export const Footer = styled.footer`
  margin-top: 30px;
  padding: 30px 60px;
  text-align: center;
`;
