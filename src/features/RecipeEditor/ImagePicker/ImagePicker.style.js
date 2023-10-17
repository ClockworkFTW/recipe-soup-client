import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.5rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Placeholder = styled.div`
  ${({ theme: { colors }, $hasError }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${$hasError ? colors.error100 : colors.neutral100};
    color: ${$hasError ? colors.error400 : colors.neutral400};
  `}
`;

export const Icon = styled.div`
  font-size: 4rem;
`;

export const Button = styled.label`
  ${({ theme: { colors }, $hasError, $hasUrl }) => css`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.5rem;
    color: white;
    transition: background-color 200ms;
    background-color: ${$hasError ? colors.error400 : colors.primary400};
    &:hover {
      cursor: pointer;
      background-color: ${$hasError ? colors.error300 : colors.primary300};
    }
  `}
`;
