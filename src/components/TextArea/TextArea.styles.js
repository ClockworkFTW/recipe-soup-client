import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-bottom: 20px;
`;

export const Label = styled.label``;

export const Content = styled.div`
  position: relative;
  background-color: #f5f5f5;
  border-radius: 0.6em;
  > div {
    position: relative;
    padding: 0.5em;
    border-radius: 0.6em;
    outline: none;
    font-weight: inherit;
    transition: border 0.2s;
    border: ${({ $hasError }) =>
      `2px solid ${$hasError ? "#ef4444" : "#ffffff"}`};
    &:focus {
      border: ${({ $hasError }) =>
        `2px solid ${$hasError ? "#ef4444" : "#d1d5db"}`};
    }
    &:hover {
      border: ${({ $hasError }) =>
        `2px solid ${$hasError ? "#ef4444" : "#d1d5db"}`};
    }
  }
`;

export const Placeholder = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  padding: 0.5em;
  font-weight: inherit;
  color: #d4d4d4;
`;

export const Error = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.8rem;
  font-weight: normal;
  color: #ef4444;
`;
