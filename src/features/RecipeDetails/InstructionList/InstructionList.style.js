import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Instruction = styled.li`
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.2s;
`;

export const Section = styled.div`
  font-weight: 700;
`;

export const Step = styled.div`
  display: inline-grid;
  grid-template-columns: minmax(20px, auto) auto;
  column-gap: 10px;
  border-radius: 8px;
  padding: ${({ $isFocused }) => ($isFocused ? "10px" : "10px 0px")};
  background-color: ${({ $isFocused }) => $isFocused && "#f5f5f5"};
  transition: padding 0.2s, background-color 0.2s;
  :hover {
    cursor: pointer;
  }
`;

export const Number = styled.span`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #0ea5e9;
`;
