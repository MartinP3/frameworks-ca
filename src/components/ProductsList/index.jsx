import React, { useEffect } from 'react';
import { Product } from "../Product";
import { API_URL } from "../../utils/apiUrls"
import { useCart } from '../../hooks/useCart';
import { Main, GridContainer } from './index.styled';

/*
 * Pulls various functions from useCart, fetches the api and turns it into json for use. 
 */

function ProductsList() {
  const {products, fetchProducts, isLoading, hasErrors} = useCart();

  useEffect(() => {
    fetchProducts(API_URL);
  }, [fetchProducts]);

  if (isLoading) {
    return <div>The juice is loading</div>;
  }

  if (hasErrors) {
    return <div>Well something went VERY wrong...</div>;
  }

  return (
    <Main>
      <GridContainer>
        {products.map((product) => (
        <Product key={product.id} product={product}/>
        ))}
      </GridContainer>
    </Main>
  );
}

export default ProductsList;