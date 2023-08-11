import styled from "styled-components";

export const Container = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  column-gap: 10px;
  align-items: center;
`;

export const Label = styled.span`
  margin-bottom: 4px;
  font-weight: bold;
  text-transform: capitalize;
`;
