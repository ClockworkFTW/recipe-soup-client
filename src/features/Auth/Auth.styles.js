import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: white;
  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

export const Header = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  margin: 2rem 0;
`;

export const Footer = styled.div`
  text-align: center;
`;

export const Input = styled.div`
  margin: 1rem 0;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  margin: 1rem 0;
`;
