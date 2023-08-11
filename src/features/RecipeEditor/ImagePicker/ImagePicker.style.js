import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 10px;
  background-color: #f5f5f5;
  border: ${({ $hasError }) => ($hasError ? "1px solid #ef4444" : "none")};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;

  color: #d4d4d4;
`;

export const Button = styled.label`
  position: absolute;
  bottom: ${({ $hasError }) => ($hasError ? "-5px" : "-4px")};
  right: ${({ $hasError }) => ($hasError ? "-5px" : "-4px")};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: 4px solid #ffffff;
  background-color: ${({ $hasError }) => ($hasError ? "#ef4444" : "#0ea5e9")};
  color: #ffffff;
  font-size: 18px;
  transition: background-color 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${({ $hasError }) => ($hasError ? "#f87171" : "#38bdf8")};
  }
`;
