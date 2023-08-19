import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ $isOpen }) => css`
    position: ${$isOpen ? "relative" : "static"};
  `}
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
`;

export const Selection = styled.div`
  ${({ theme: { colors }, $isOpen }) => css`
    display: inline-grid;
    grid-template-columns: auto auto;
    column-gap: 10px;
    padding: 0.5em;
    border-radius: 0.6em;
    background-color: #f5f5f5;
    transition: border 200ms, box-shadow 200ms;
    border: 2px solid ${$isOpen ? colors.primary400 : colors.base200};
    box-shadow: 0 2px 6px ${$isOpen ? colors.primary200 : "white"};
    &:hover {
      cursor: pointer;
      border: 2px solid ${colors.primary400};
    }
  `}
`;

export const Value = styled.div`
  white-space: nowrap;
`;

export const Arrow = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    color: ${colors.base400};
  `}
`;

export const Options = styled.ul`
  ${({ theme: { colors } }) => css`
    z-index: 2;
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    max-height: 400px;
    overflow-y: scroll;
    margin: 0;
    padding: 0;
    list-style-type: none;
    border-radius: 8px;
    background-color: ${colors.base100};
    border: 2px solid ${colors.primary400};
    box-shadow: 0 2px 6px ${colors.primary200};
  `}
`;

export const Option = styled.li`
  ${({ theme: { colors } }) => css`
    margin: 5px;
    padding: 5px;
    border-radius: 4px;
    transition: background-color 200ms;
    &:hover {
      cursor: pointer;
      background-color: ${colors.base200};
    }
  `}
`;
