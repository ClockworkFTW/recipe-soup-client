import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr repeat(5, max-content);
  column-gap: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr repeat(4, max-content);
  }
`;
