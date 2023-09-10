import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    padding: 4em;
    border-radius: 0.75em;
    border: 2px solid ${colors.neutral200};
    background-color: white;
  `}
`;

export const InputGroup = styled.div`
  margin-bottom: 1em;
`;
