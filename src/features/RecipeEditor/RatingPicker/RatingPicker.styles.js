import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  color: ${({ color }) => color};
`;
