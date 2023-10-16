import styled from "styled-components";

export const Container = styled.div`
  padding: 4em;
  border-radius: 0.75em;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: white;
  @media (max-width: 600px) {
    padding: 2em;
  }
`;

export const Header = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  margin: 2em 0;
`;

export const Footer = styled.div`
  text-align: center;
`;

export const Input = styled.div`
  margin: 1em 0;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1em;
  margin: 1em 0;
`;
