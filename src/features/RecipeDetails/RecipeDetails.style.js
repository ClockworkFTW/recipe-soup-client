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

export const Test = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(7, auto);
  column-gap: 15px;
  align-self: start;
  align-items: center;
`;

export const Spacer = styled.div`
  width: 1px;
  height: 100%;
  background: #e5e5e5;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-grid;
  grid-template-columns: auto auto auto;
  column-gap: 10px;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  column-gap: 30px;
`;
