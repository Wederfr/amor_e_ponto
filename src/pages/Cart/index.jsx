import React from 'react';
import { useCart } from '../../context/CartContext';
import './style.css'; // Importe o estilo conforme necessário

const Cart = () => {
    const { cart, removeItem, clear, cartSize } = useCart();

    return (
        <div className="cart-page">
            <h1>Carrinho de Compras</h1>
            
            {/* Exibindo mensagem caso o carrinho esteja vazio */}
            {cartSize() === 0 ? (
                <p>O carrinho está vazio. Adicione alguns itens!</p>
            ) : (
                <div>
                    <ul>
                        {/* Listando os itens no carrinho */}
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.pictureUrl} alt={item.name} className="cart-item__image" />
                                <div className="cart-item__details">
                                    <h3>{item.name}</h3>
                                    <p>Preço: R${item.price}</p>
                                    <p>Quantidade: {item.qtd}</p>
                                    <button onClick={() => removeItem(item.id)}>Remover</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p>Total de itens: {cartSize()}</p>
                        <button onClick={clear}>Limpar Carrinho</button>
                        <button onClick={() => alert('Finalizar compra')} className="checkout-button">
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;