import styled from "styled-components";

export const Container = styled.div`
  position: ${({ $isSearching }) => ($isSearching ? "relative" : "static")};
  max-width: min-content;
  padding-bottom: ${({ $isSearching }) => ($isSearching ? "0" : "20px")};
`;

export const Selection = styled.div`
  padding: 0.5em;
  border-radius: 0.6em;
  background-color: #f5f5f5;
  white-space: nowrap;
  transition: border 0.2s;
  border: 2px solid #ffffff;
  &:hover {
    cursor: pointer;
    border: 2px solid #d1d5db;
  }
`;

export const Search = styled.div`
  min-width: 200px;
`;

export const Options = styled.ul`
  z-index: 1;
  position: absolute;
  top: calc(100% - 10px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style-type: none;
  border-radius: 8px;
  border: 2px solid #d1d5db;
  background-color: #f5f5f5;
`;

export const Option = styled.li`
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;
