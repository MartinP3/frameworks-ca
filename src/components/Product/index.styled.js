import styled from "styled-components";

export const GridItem = styled.div`
  position: relative;
  display: flex;
`;

export const ProductWrapper = styled.div`
  width: 350px;
  min-height: 520px;
  position: relative;
  background-color: whitesmoke;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const TextContent = styled.div`
  height: 140px;
  position: relative;
`;

export const ProductHeading = styled.h2`
  padding: 0px 5px;
`;

export const ProductDescriptionContainer = styled.div`
  padding: 0px 5px;
`;

export const PricesContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0 150px; // I have no excuse...
`;

export const Price = styled.div`
  color: ${(props) =>
    props.isValid ? "rgba(0, 0, 0, 1)" : "rgba(200, 0, 0, 0.8)"};
  text-decoration: ${(props) => (props.isValid ? "none" : "line-through")};
`;

export const ViewProductButton = styled.button`
  padding: 1rem 20px;
  background-color: rgba(44, 49, 206, 1);
  border: 0;
  font-weight: 800;
  width: 100%;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  transition: background-color 400ms;
  :hover {
    background-color: rgba(44, 49, 206, 0.75);
  }
  > a {
    color: white;
  }
`;
