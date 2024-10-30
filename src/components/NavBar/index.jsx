
import CartWidget from '../CartWidget';
import './style.css';


function NavBar() {
  return (
    <div className="NavBar">
      <h1>AMOR E PONTO</h1>

      <nav>
        <ul>
          <li><a href="http://google.com">INÍCIO</a></li>
          <li><a href="http://google.com">PRODUTOS</a></li>
          <li><a href="http://google.com">CONTATOS</a></li>
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