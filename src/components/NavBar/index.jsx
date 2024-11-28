import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './style.css';
import { useCart } from '../../context/CartContext';

function NavBar() {
  const { cartSize } = useCart();

  return (
    <div className="NavBar">
      <img className="logo-img" src="https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/logo%20amoreponto.png" alt="Logo Amor e Ponto" />
      <h1>AMOR E PONTO</h1>


      <nav>
        <ul>
          <li><Link to="/">INÍCIO</Link></li>
          <li><Link to="/sobre-nos">SOBRE NÓS</Link></li>
          <li><Link to="/contato">CONTATOS</Link></li>
        </ul>
        <div className="cart-icon">
          <Link to="/cart">
            <CartWidget />
          </Link>
          <h5>{cartSize()}</h5>  {/* Exibindo o tamanho do carrinho */}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;