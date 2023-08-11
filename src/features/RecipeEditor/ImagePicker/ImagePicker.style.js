import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
  border-radius: 10px;
  background-color: #f5f5f5;
  color: #d4d4d4;
  border: ${({ $hasError }) =>
    `1px solid ${$hasError ? "#ef4444" : "#e5e5e5"}`};
`;

export const Button = styled.label`
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 3px solid #ffffff;
  background-color: ${({ $hasError }) => ($hasError ? "#ef4444" : "#0ea5e9")};
  color: #ffffff;
  font-size: 18px;
  transition: background-color 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${({ $hasError }) => ($hasError ? "#f87171" : "#38bdf8")};
  }
`;
