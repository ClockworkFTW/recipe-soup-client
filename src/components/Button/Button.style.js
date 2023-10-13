import styled, { css } from "styled-components";

const Button = styled.button`
  ${({ theme: { colors } }) => css`
    padding: 0.5em 0.75em;
    border-radius: 0.5em;
    border: none;
    outline: none;
    transition: color 200ms, background-color 200ms, box-shadow 200ms;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 0 2px ${colors.primary400};
    }
    &:focus {
      box-shadow: 0 0 0 2px ${colors.primary400};
    }
  `}
`;

export const ButtonPrimary = styled(Button)`
  ${({ theme: { colors } }) => css`
    color: white;
    background-color: ${colors.primary400};
  `}
`;

export const ButtonSecondary = styled(Button)`
  ${({ theme: { colors } }) => css`
    color: ${colors.neutral800};
    background-color: ${colors.neutral100};
    > svg {
      color: ${colors.neutral400};
    }
  `}
`;

export const ButtonTertiary = styled(Button)`
  ${({ theme: { colors } }) => css`
    color: ${colors.neutral800};
    background-color: transparent;
    > svg {
      color: ${colors.neutral400};
    }
  `}
`;

export const Label = styled.span`
  ${({ $hasIcon }) => css`
    margin-left: ${$hasIcon ? "0.5em" : "0"};
    @media (max-width: 900px) {
      display: ${$hasIcon ? "none" : "inherit"};
    }
  `}
`;
