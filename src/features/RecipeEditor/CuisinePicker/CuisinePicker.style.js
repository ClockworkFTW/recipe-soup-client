import styled from "styled-components";

export const Container = styled.div`
  position: ${({ $isSearching }) => ($isSearching ? "relative" : "static")};
  width: 25%;
`;

export const Selection = styled.div`
  width: min-content;
  padding: 0.5em;
  border-radius: 0.6em;
  background-color: #f5f5f5;
  white-space: nowrap;
  transition: border 0.2s;
  border: 1px solid #e5e5e5;
  &:hover {
    cursor: pointer;
    border: 1px solid #0ea5e9;
  }
`;

export const Search = styled.div``;

export const Options = styled.ul`
  z-index: 1;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style-type: none;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background-color: #f5f5f5;
`;

export const Option = styled.li`
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;
