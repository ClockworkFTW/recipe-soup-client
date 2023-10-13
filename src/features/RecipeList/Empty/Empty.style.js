import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

export const Icon = styled.div`
  ${({ theme: { colors } }) => css`
    margin-bottom: 1rem;
    font-size: 6rem;
    color: ${colors.neutral400};
  `}
`;

export const Button = styled.div`
  margin-top: 2.5rem;
`;
