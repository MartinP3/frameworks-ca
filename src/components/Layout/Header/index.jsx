import { Link } from "react-router-dom";
import { Header } from './index.styled';
import "./styles.css";
import cartSvg from "../../../assets/cart.svg"
import { useCart } from '../../../hooks/useCart';

/**
 * The header with various links and a div for showing when things are added to the cart and how much has been added.
 */

export function Nav() {
  const { cartCount } = useCart();

  return (
  <Header>
    <nav>
      <ul>
        <li className='site-title'>
        <Link to="/">OnlineShopz</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <div className='cartIcon'>
          <Link to="/checkout"><img src={cartSvg} className='cartSvg' alt="cart svg"></img></Link>
          {cartCount > 0 && (
          <div className='cartCountBadge'>{cartCount}</div>
          )}
        </div>
      </ul>
    </nav>
  </Header>
  );
}