import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 1em 0;
  border-radius: 0.75em;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: transform 200ms, box-shadow 200ms;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
  > a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Container = styled.div`
  padding: 1em;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 0.5em;
`;

export const Content = styled.div`
  margin-top: 1em;
`;
