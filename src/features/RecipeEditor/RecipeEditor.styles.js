import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 4em;
  border-radius: 0.75em;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  column-gap: 2em;
  margin-bottom: 2em;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  column-gap: 2em;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Selectors = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto auto auto;
  column-gap: 1em;
  align-self: start;
`;

export const Spacer = styled.div`
  ${({ theme: { colors } }) => css`
    width: 2px;
    background: ${colors.neutral100};
  `}
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-grid;
  grid-template-columns: auto auto auto;
  column-gap: 0.75em;
`;
