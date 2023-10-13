import styled, { css } from "styled-components";

export const Icon = styled.span`
  ${({ theme: { colors }, $isActive }) => css`
    padding: 4px;
    font-size: 1rem;
    color: ${$isActive ? colors.yellow : colors.neutral200};
  `}
`;
