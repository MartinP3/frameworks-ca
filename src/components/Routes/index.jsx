import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Contact } from "../../pages/Contact";
import { Checkout } from '../../pages/Checkout';
import { CheckoutSuccess } from "../../pages/CheckoutSuccess";
import { Product } from "../../pages/Product";
import { NotFound } from "../../pages/NotFound";

export function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkoutsuccess" element={<CheckoutSuccess />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}