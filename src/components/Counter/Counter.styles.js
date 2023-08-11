import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const Content = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  background-color: #f5f5f5;
  border-radius: 0.6em;
  transition: border 0.2s;
  border: 2px solid #ffffff;
  &:hover {
    border: 2px solid #d1d5db;
  }
`;

export const Button = styled.button`
  padding: 0.5em;
  border: none;
  outline: none;
  background: none;
  color: #a3a3a3;
  &:hover {
    cursor: pointer;
  }
`;

export const Value = styled.span`
  padding: 0.5em;
`;
