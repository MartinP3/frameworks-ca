import React from 'react'
import { Link } from 'react-router-dom';
import * as S from "./index.styled"

export function Product({ product: { 
  title,
  description,
  imageUrl,
  price, 
  discountedPrice,
  id,
} }) 
{

  return (
    <S.GridItem>
      <S.ProductWrapper>
        <S.ProductImageContainer>
          <S.ProductImage src={imageUrl}/>
        </S.ProductImageContainer>
        <S.TextContent>
          <S.ProductHeading>{title}</S.ProductHeading>
          <S.ProductDescriptionContainer>{description}</S.ProductDescriptionContainer>
          <S.PricesContainer>
            <S.Price isValid={price === discountedPrice}>{price}</S.Price>
            <div>{discountedPrice < price && discountedPrice}</div>
          </S.PricesContainer>
        </S.TextContent>
        <S.ViewProductButton>
            <Link to={`/product/${id}`}>VIEW PRODUCT</Link>
        </S.ViewProductButton>
      </S.ProductWrapper>
    </S.GridItem>
  );
}