import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, [col] 150px);
  grid-template-rows: repeat(2, [row] auto);
  background-color: whitesmoke;
  min-height: 500px;

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, [row] auto);
    max-width: 350px;
  }
`;

export const ProductImageContainer = styled.div`
  grid-column: col / span 2;
  grid-row: row / span 2;
  @media (max-width: 650px) {
    grid-column: 1;
    grid-row: row / span 3;
    max-height: 300px;
  }
`;

export const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover; // It looks silly with some wide images but the contain isn't ideal here.
  @media (max-width: 650px) {
    object-fit: contain;
  }
`;

export const ProductInfo = styled.div`
  grid-template-columns: repeat(4, [col] auto);
  grid-template-rows: repeat(8, [row] auto);
  grid-column: col 3 / span 2;
  grid-row: row / span 2;
  display: grid;
  grid-gap: 10px;
  @media (max-width: 650px) {
    grid-column: 1;
    grid-row: row 4 / span 2;
    margin: 0 10px;
  }
`;

export const ProductTitle = styled.h2`
  grid-column: col 1 / span 5;
  grid-row: row 2 / span 1;
  display: flex;
  justify-content: center;
  @media (max-width: 650px) {
    grid-row: row 1 / span 1;
    margin: 0 10px;
  }
`;

export const ProductDescription = styled.p`
  grid-column: col / span 5;
  grid-row: row 3 / span 3;
  @media (max-width: 650px) {
    grid-row: row 2 / span 1;
    margin: 0 10px;
  }
`;

export const ProductPriceContainer = styled.div`
  grid-column: col 1 / span 5;
  grid-row: row 7 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  > p {
    margin: 5px 0;
  }
  @media (max-width: 650px) {
    grid-row: row 3 / span 1;
    margin: 0 10px;
  }
`;

export const Price = styled.div`
  grid-row: 1;
  grid-column: col 2;
  color: ${(props) =>
    props.isValid ? "rgba(0, 0, 0, 1)" : "rgba(200, 0, 0, 0.8)"};
  text-decoration: ${(props) => (props.isValid ? "none" : "line-through")};
`;

export const ProductBuyButton = styled.button`
  grid-column: 1 / span 5;
  grid-row: row 8 / span 2;
  background-color: rgba(44, 49, 206, 1);
  color: white;
  font-weight: 800;
  margin: 0 10px 10px 10px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: rgba(44, 49, 206, 0.75);
  }
  @media (max-width: 650px) {
    grid-row: row 4 / span 4;
    margin: 0 10px;
  }
`;
