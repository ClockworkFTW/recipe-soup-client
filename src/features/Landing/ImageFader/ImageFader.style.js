import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ImagePrevious = styled(Image)`
  z-index: 2;
  animation: 1000ms ${fadeOut} ease;
  animation-fill-mode: forwards;
`;

export const ImageCurrent = styled(Image)`
  z-index: 1;
  filter: drop-shadow(0 4px 6px rgb(0 0 0 / 0.1))
    drop-shadow(0 2px 4px rgb(0 0 0 / 0.1));
`;
