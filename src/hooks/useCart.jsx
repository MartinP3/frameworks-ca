import { create } from 'zustand'
import { API_URL } from '../utils/apiUrls';

const useCartStore = create((set) => ({
  products: [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  cartCount: 0,
  isLoading: false,
  hasErrors: false,
  addProductToCart: (id) => {
    const updatedCart = [...useCartStore.getState().cart, id];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    set((state) => ({
      cart: [...state.cart, id],
      cartCount: state.cartCount + 1,
    }));
  },
  clearCart: () => {
    localStorage.removeItem('cart');
    set({ cart: [] });
  },
  addAllProducts: (ProductsList) => set({ products: ProductsList }),
  fetchProducts: async (url) => {
    set(() => ({ loading: true}))
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      set((state) => ({ products: (state.products = json), isLoading: false}))
    } catch (error) {
      set(() => ({ hasErrors: true, isLoading: false}))
    }
  }
}))

function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const products = useCartStore((state) => state.products);
  const fetchProducts = useCartStore((state) => state.fetchProducts);
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const cartCount = useCartStore((state) => state.cartCount);
  function addToCart(id) {
    addProductToCart(id);
  }

  return { products, cart, addToCart, clearCart, fetchProducts, cartCount };
}

export { useCart }