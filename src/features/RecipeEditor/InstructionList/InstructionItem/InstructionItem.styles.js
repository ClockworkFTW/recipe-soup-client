import styled from "styled-components";

export const Item = styled.li`
  display: grid;
  grid-template-columns: minmax(20px, auto) 1fr auto;
  column-gap: 10px;
  margin-bottom: 18px;
`;

export const Content = styled.div`
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const Icon = styled.span`
  padding: 4px 0;
  font-weight: bold;
  text-align: center;
  color: #0ea5e9;
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
