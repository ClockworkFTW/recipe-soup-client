import styled from "styled-components";

export const Container = styled.div`
  padding: 1em;
  border-radius: 0.75em;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: white;
  padding: 4rem;
  @media (max-width: 900px) {
    padding: 2rem;
  }
  @media (max-width: 600px) {
    padding: 1rem;
    border-radius: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1em;
  row-gap: 3em;
  margin: 3em 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 1em;
    margin: 1.5em 0;
  }
`;
