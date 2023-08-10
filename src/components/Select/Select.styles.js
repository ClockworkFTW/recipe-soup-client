import styled from "styled-components";

export const Container = styled.div`
  position: ${({ $isOpen }) => ($isOpen ? "relative" : "static")};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;

export const Selection = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
  padding: 0.5em;
  border-radius: 0.6em;
  background-color: #f5f5f5;
  outline: ${({ $isOpen }) => `2px solid ${$isOpen ? "#22c55e" : "#ffffff"}`};
  transition: outline 0.2s;
  &:hover {
    cursor: pointer;
    outline: ${({ $isOpen }) => `2px solid ${$isOpen ? "#22c55e" : "#d1d5db"}`};
  }
`;

export const Value = styled.div`
  white-space: nowrap;
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  color: #a3a3a3;
`;

export const Options = styled.ul`
  z-index: 1;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  max-height: 400px;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  border-radius: 8px;
  border: 2px solid #d1d5db;
  list-style-type: none;
  background-color: #f5f5f5;
`;

export const Option = styled.li`
  padding: 0.5em;
  &:hover {
    cursor: pointer;
  }
`;
