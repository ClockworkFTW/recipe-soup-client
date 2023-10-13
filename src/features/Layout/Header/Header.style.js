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
  padding: 2em;
  @media (max-width: 900px) {
    padding: 1em 1em 0 1em;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  column-gap: 1em;
`;
