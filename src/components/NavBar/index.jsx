
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './style.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

function NavBar() {
  const {cartSize} = useContext(CartContext);
  return (
    <div className="NavBar">
      <h1>AMOR E PONTO</h1>

      <nav>
        <ul>
          <li><Link to="/">INÍCIO</Link></li> 
          <li><Link to="/sobre-nos">SOBRE NÓS</Link></li>
          <li><Link to="/contato">CONTATOS</Link></li>
        </ul>
        <div className="cart-icon">
          <CartWidget />
          <h5>{cartSize()}</h5>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;