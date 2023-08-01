import styled from "styled-components";

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 30px;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  column-gap: 20px;
`;
