
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './style.css';
import { useCart } from '../../context/CartContext';  // Já está importando o hook correto

function NavBar() {
  const { cartSize } = useCart();  // Usando o hook useCart diretamente

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
          <h5>{cartSize()}</h5>  {/* Exibindo o tamanho do carrinho */}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;