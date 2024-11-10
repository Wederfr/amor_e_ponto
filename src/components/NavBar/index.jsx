
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './style.css';

function NavBar() {
  return (
    <div className="NavBar">
      <h1>AMOR E PONTO</h1>

      <nav>
        <ul>
          <li><Link to="/">INÍCIO</Link></li> {/* Link para a home */}
          <li><Link to="/sobre-nos">SOBRE NÓS</Link></li> {/* Link para Sobre Nós */}
          <li><Link to="/contato">CONTATOS</Link></li> {/* Link para a página de contatos */}
        </ul>
        <div className="cart-icon">
          <CartWidget />
          <h5>3</h5>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;