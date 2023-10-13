import styled from "styled-components";

export const Wrapper = styled.div`
  > a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: 30% 1fr;
    column-gap: 1rem;
    row-gap: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 0.5em;
  @media (max-width: 600px) {
    aspect-ratio: 1/1;
  }
`;

export const Content = styled.div``;
