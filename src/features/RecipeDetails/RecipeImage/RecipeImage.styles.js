import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 0.5rem;
  @media (max-width: 900px) {
    aspect-ratio: 2/1;
  }
`;
