import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 4rem;
  border-radius: 0.75rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  column-gap: 2rem;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentTop = styled.div``;

export const ContentBottom = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(7, auto);
  column-gap: 1rem;
  align-self: start;
  align-items: center;
`;

export const Spacer = styled.div`
  ${({ theme: { colors } }) => css`
    width: 2px;
    height: 100%;
    background: ${colors.neutral100};
  `}
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-grid;
  grid-template-columns: auto auto auto;
  column-gap: 0.75rem;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  column-gap: 2rem;
`;
