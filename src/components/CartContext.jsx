import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const CartContext = createContext();

// Hook para acessar o contexto
export function useCart() {
  return useContext(CartContext);
}

// CartProvider que gerencia o estado do carrinho
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Função para obter o número de itens no carrinho
  const cartSize = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Função para obter o preço total do carrinho
  const totalPrice = () => {
    console.log("Calculando total:", cartItems);
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  // Função para adicionar um item ao carrinho
  const addItem = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
  };

  // Função para remover um item do carrinho
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Função para limpar o carrinho
  const clear = () => {
    setCartItems([]);
  };

  // Retorno do provider com as funções e os dados necessários
  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, cartSize, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
