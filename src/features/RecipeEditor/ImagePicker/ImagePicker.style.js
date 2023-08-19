import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.625em;
  object-fit: cover;
`;

export const Placeholder = styled.div`
  ${({ theme: { colors }, $hasError }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 0.625em;
    border: 2px solid ${$hasError ? colors.error400 : colors.base200};
    background-color: ${colors.base100};
    color: ${colors.base300};
  `}
`;

export const Icon = styled.div`
  font-size: 4em;
`;

export const Button = styled.label`
  ${({ theme: { colors }, $hasError, $hasUrl }) => css`
    position: absolute;
    bottom: 0.375em;
    right: 0.375em;
    width: 2.25em;
    height: 2.25em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.625em;
    color: white;
    font-size: 1.125em;
    transition: background-color 200ms;
    border: 2px solid ${$hasUrl ? "white" : colors.base100};
    background-color: ${$hasError ? colors.error500 : colors.primary400};
    &:hover {
      cursor: pointer;
      background-color: ${$hasError ? colors.error400 : colors.primary300};
    }
  `}
`;
