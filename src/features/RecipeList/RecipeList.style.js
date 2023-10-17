import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
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
  column-gap: 1rem;
  row-gap: 3rem;
  margin: 3rem 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
    margin: 1.5em 0;
  }
`;
