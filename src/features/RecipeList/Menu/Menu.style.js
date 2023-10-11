import styled from "styled-components";

export const Container = styled.div`
  padding: 1em;
  border-radius: 0.75em;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: white;
`;

export const Content = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr repeat(5, max-content);
  column-gap: 1em;
`;
