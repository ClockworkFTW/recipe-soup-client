import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;
  border-radius: 0.75rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media (max-width: 900px) {
    padding: 2rem;
  }
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  column-gap: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 900px) {
    order: -1;
    row-gap: 1rem;
  }
`;

export const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentMid = styled.div``;

export const ContentBot = styled.div`
  display: grid;
  grid-template-columns: max-content min-content;
  align-items: center;
  column-gap: 1.5rem;
  @media (max-width: 600px) {
    grid-template-columns: max-content;
    row-gap: 1rem;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  column-gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`;
