import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  align-items: center;
  padding: 2rem 0;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
    text-align: center;
    row-gap: 2rem;
  }
`;

export const Content = styled.div``;
