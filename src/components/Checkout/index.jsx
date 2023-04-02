// import { useCart } from '../../hooks/useCart';
import { useEffect, useState } from 'react';
// import * as S from "./index.styled"

export function CheckoutPage()
{
  const cartData = localStorage.getItem("cart")
  console.log(cartData)
  const parsedData = JSON.parse(cartData) || {};
  console.log(parsedData)
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(parsedData);
      const json = await response.json();
      setData([json]);
    }
    fetchProducts();
  }, [])

  return (
    <main className='checkoutPage'>
      <h1>Checkout Page</h1>
      <div className='checkoutInfo'>
        {data.map(product => (
          <div key={product.id}>
            <h2>{product.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}