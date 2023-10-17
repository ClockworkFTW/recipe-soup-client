import styled from "styled-components";

export const Container = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  align-items: center;
  column-gap: 0.5rem;
`;

export const Flag = styled.img`
  width: 2rem;
  height: 1.5rem;
  border-radius: 4px;
  @media (max-width: 600px) {
    width: 1.5rem;
    height: 1rem;
  }
`;

export const Label = styled.span``;
