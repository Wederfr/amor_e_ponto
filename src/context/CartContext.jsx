import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const CartContext = createContext();

// Hook para acessar o contexto
export function useCart() {
  return useContext(CartContext);
}

// CartProvider que gerencia o estado do carrinho
export const CartProvider = ({ children }) => {
  // Inicializando cartItems como um array vazio
  const [cartItems, setCartItems] = useState([]);

  // Função para calcular o número total de itens no carrinho
  const cartSize = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  };

  // Função para calcular o preço total
  const totalPrice = () => {
    return cartItems.reduce((total, item) => {
      // Verifica se o preço e a quantidade são válidos
      if (typeof item.price === 'number' && typeof item.quantity === 'number') {
        return total + (item.price * item.quantity);
      }
      console.log(`Item inválido:`, item); // Log para depuração
      return total; // Retorna o total sem erro
    }, 0);
  };

  // Função para adicionar itens ao carrinho
  const addItem = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Se o item já existe no carrinho, apenas incrementa a quantidade
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || 0) } : i
        );
      }
      // Caso contrário, adiciona o novo item
      return [...prevItems, { ...item, quantity: item.quantity || 1 }];
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

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, cartSize, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

