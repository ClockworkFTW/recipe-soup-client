import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  ${({ $isOnAuthPage }) => css`
    max-width: ${$isOnAuthPage ? "550px" : "1100px"};
    margin: 0 auto;
    padding: 2em;
    @media (max-width: 800px) {
      padding: 1em;
    }
  `}
`;
