import styled from "styled-components";

export const Button = styled.button`
  padding: 4px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  color: ${({ $isActive }) => ($isActive ? "#facc15" : "#e5e5e5")};
  &:hover {
    cursor: pointer;
  }
`;
