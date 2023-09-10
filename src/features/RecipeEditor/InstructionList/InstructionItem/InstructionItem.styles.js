import styled, { css } from "styled-components";

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1.5em 1fr 1.5em;
  column-gap: 0.5em;
  margin-bottom: 1em;
`;

export const Bullet = styled.span`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  ${({ theme: { colors }, $opacity }) => css`
    position: absolute;
    width: 100%;
    text-align: center;
    opacity: ${$opacity};
    color: ${colors.primary400};
    font-weight: bold;
    transition: opacity 200ms;
  `}
`;

export const Content = styled.div`
  ${({ $isSection }) => css`
    font-weight: ${$isSection ? "bold" : "normal"};
  `}
`;

export const Grip = styled.span`
  ${({ theme: { colors } }) => css`
    text-align: center;
    color: ${colors.neutral200};
    &:hover {
      cursor: grab;
    }
  `}
`;
