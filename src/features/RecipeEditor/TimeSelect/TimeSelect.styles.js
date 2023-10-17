import styled from "styled-components";

export const Container = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  column-gap: 0.75rem;
  align-items: center;
`;

export const Label = styled.span`
  margin-bottom: 0.25em;
  font-weight: bold;
  text-transform: capitalize;
`;
