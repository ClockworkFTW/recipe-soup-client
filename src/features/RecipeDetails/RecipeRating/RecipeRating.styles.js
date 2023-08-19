import styled, { css } from "styled-components";

export const Icon = styled.span`
  ${({ theme: { colors }, $isActive }) => css`
    padding: 4px;
    font-size: 18px;
    color: ${$isActive ? colors.yellow : colors.base200};
  `}
`;
