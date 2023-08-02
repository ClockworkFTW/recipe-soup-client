import styled from "styled-components";

export const Item = styled.li`
  display: grid;
  grid-template-columns: minmax(20px, auto) 1fr auto;
  column-gap: 10px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const Number = styled.span`
  padding: 4px 0;
  font-weight: bold;
  text-align: center;
  color: #22c55e;
  &:hover {
    cursor: pointer;
    color: #e5e5e5;
  }
`;

export const Grip = styled.span`
  padding: 4px;
  color: #e5e5e5;
  &:hover {
    cursor: grab;
  }
`;
