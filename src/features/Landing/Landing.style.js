import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  align-items: center;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
    text-align: center;
    row-gap: 2rem;
  }
`;

export const Content = styled.div``;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  filter: drop-shadow(0 4px 6px rgb(0 0 0 / 0.1))
    drop-shadow(0 2px 4px rgb(0 0 0 / 0.1));
`;
