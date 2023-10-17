import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.header`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  @media (max-width: 900px) {
    padding: 1rem 1rem 0 1rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  column-gap: 1rem;
`;
