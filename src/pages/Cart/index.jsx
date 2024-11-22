import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './style.css';

const Cart = () => {
  const { cartItems, removeItem, clear, cartSize, totalPrice } = useCart();

  // Verificando se cartItems é um array e se tem dados antes de mapear
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return <p>O carrinho está vazio. Adicione alguns itens!</p>;
  }

  return (
    <div className="cart-page">
      <h1>SUAS COMPRAS</h1>

      {/* Verificando se há itens no carrinho */}
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">O carrinho está vazio. Adicione alguns itens!</p>
      ) : (
        <div>
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.pictureUrl} alt={item.name} className="cart-item__image" />
                <div className="cart-item__details">
                  <h3>{item.name}</h3>
                  <p>Preço: R${item.price.toFixed(2)}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <button className="remove-button" onClick={() => removeItem(item.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p>Total de itens: {cartSize()}</p>
            {/* Verificando se totalPrice não é NaN */}
            <p><strong>Total: R${totalPrice().toFixed(2) || 0}</strong></p>
            <div className="cart-actions">
              
              <button className="clear-button" onClick={clear}>Limpar Carrinho</button>
              <button onClick={() => alert('Finalizar compra')} className="checkout-button">
                Finalizar Compra
              </button>
              <Link to="/" className='store-button'>Voltar à loja</Link>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
