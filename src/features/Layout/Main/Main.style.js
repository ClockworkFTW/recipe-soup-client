import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  ${({ $isOnAuthPage }) => css`
    max-width: ${$isOnAuthPage ? "550px" : "1100px"};
    height: 100%;
    margin: 0 auto;
    padding: 2em;
    @media (max-width: 900px) {
      padding: 1em;
    }
    @media (max-width: 600px) {
      padding: 1em 0;
    }
  `}
`;
