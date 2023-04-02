import { useCart } from '../../hooks/useCart';
import { API_URL } from '../../utils/apiUrls';
import { useEffect, useState } from 'react';
import * as S from "./index.styled"

/*
 * Gets the url from the browser, splits out the product part and leaves me with just the product id
 */

export function SingularProduct()
{
  const url = new URL(window.location.href);
  const pathName = url.pathname;
  const splitPath = pathName.split("/product/");
  const pathId = splitPath.at(-1);
  const id = `${API_URL}/${pathId}`;

  // const { id } = useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(id);
      const json = await response.json();
      setData([json]);
    }
    fetchProduct();
  }, [id])
    const {addToCart} = useCart();

    function onAddToCartClick() {
      addToCart(id);
    }
  return (
    <main className='productPage'>
      <h1>Product Page</h1>
      <div className='productInfo'>
        {data.map(product => (
        <div key={product.id}>
        <S.GridContainer>
          <S.ProductImageContainer>
            <S.ProductImage src={product.imageUrl}/>
          </S.ProductImageContainer>
          <S.ProductInfo>
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ProductDescription>{product.description}</S.ProductDescription>
            <S.ProductPriceContainer>
              <S.Price isValid={product.price === product.discountedPrice}>{product.price}</S.Price>
              <div>{product.discountedPrice < product.price && product.discountedPrice}</div>
            </S.ProductPriceContainer>
            <S.ProductBuyButton onClick={onAddToCartClick}>ADD TO CART</S.ProductBuyButton>
          </S.ProductInfo>
        </S.GridContainer>
        </div>
        ))}
      </div>
      <div className='productReviews'>

      </div>
    </main>
  );
}