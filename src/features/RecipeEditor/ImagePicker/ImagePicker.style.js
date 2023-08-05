import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
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
  border-radius: 8px;
  background-color: #f5f5f5;
  color: #d4d4d4;
`;

export const Button = styled.label`
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: 4px solid #ffffff;
  background-color: #22c55e;
  color: #ffffff;
  font-size: 18px;
  transition: background-color 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #4ade80;
  }
`;
