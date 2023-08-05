import styled from "styled-components";

export const Icon = styled.span`
  padding: 4px;
  font-size: 18px;
  color: ${({ $isActive }) => ($isActive ? "#facc15" : "#e5e5e5")};
`;
