import styled from "styled-components";

export const Container = styled.div`
  position: ${({ $isSearching }) => ($isSearching ? "relative" : "static")};
  max-width: min-content;
  padding-bottom: 20px;
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
  display: grid;
  grid-template-columns: auto 200px auto;
  border-radius: 0.6em;
  background-color: #f5f5f5;
  transition: border 0.2s;
  border: ${({ $isFocused, $hasError }) =>
    `2px solid ${$hasError ? "#ef4444" : $isFocused ? "#d1d5db" : "#ffffff"}`};
  &:hover {
    border: ${({ $hasError }) =>
      `2px solid ${$hasError ? "#ef4444" : "#d1d5db"}`};
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0 0.5em 0.5em;
  font-size: 1.1rem;
  color: #d4d4d4;
  &:hover {
    cursor: text;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  border: none;
  outline: none;
  background: none;
  font-weight: inherit;
  &::placeholder {
    color: #d4d4d4;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5em 0.5em 0.5em 0;
  font-size: 1.1rem;
  color: #d4d4d4;
  border: none;
  outline: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Error = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.8rem;
  color: #ef4444;
`;

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
  border: 2px solid #d1d5db;
  background-color: #f5f5f5;
`;

export const Option = styled.li`
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;
