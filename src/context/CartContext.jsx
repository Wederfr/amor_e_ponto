import React, { createContext, useState, useEffect, useContext } from 'react';

// Criação do contexto
const CartContext = createContext();

// Hook para acessar o contexto
export function useCart() {
  return useContext(CartContext);
}

// CartProvider que gerencia o estado do carrinho
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Recuperando o carrinho do localStorage ao carregar a página
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Salvando os itens no localStorage sempre que o carrinho for alterado
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Função para calcular o número total de itens no carrinho
  const cartSize = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  };

  // Função para calcular o preço total
  const totalPrice = () => {
    return cartItems.reduce((total, item) => {
      if (typeof item.price === 'number' && typeof item.quantity === 'number') {
        return total + (item.price * item.quantity);
      }
      console.log(`Item inválido:`, item);
      return total;
    }, 0);
  };

  // Função para adicionar itens ao carrinho
  // Função para adicionar itens ao carrinho
  const addItem = (item, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Se o item já existe no carrinho, apenas incrementa a quantidade
        return prevItems.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + quantity }  // Corrigido para somar a quantidade
            : i
        );
      }
      // Caso contrário, adiciona o novo item com a quantidade
      return [...prevItems, { ...item, quantity }];
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
