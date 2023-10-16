import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export const Icon = styled.div`
  ${({ theme: { colors } }) => css`
    font-size: 6rem;
    color: ${colors.neutral400};
  `}
`;
