import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
