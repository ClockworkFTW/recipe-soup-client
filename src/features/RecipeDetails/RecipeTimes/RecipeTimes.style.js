import styled from "styled-components";

export const Container = styled.div`
  display: inline-grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, auto)`};
  column-gap: 15px;
  align-self: start;
`;

export const Spacer = styled.div`
  width: 1px;
  background: #e5e5e5;
`;
