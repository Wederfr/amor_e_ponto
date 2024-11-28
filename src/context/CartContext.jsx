import React, { createContext, useState, useEffect, useContext } from 'react';


const CartContext = createContext();


export function useCart() {
  return useContext(CartContext);
}


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  const cartSize = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  };


  const totalPrice = () => {
    return cartItems.reduce((total, item) => {
      if (typeof item.price === 'number' && typeof item.quantity === 'number') {
        return total + (item.price * item.quantity);
      }
      console.log(`Item inválido:`, item);
      return total;
    }, 0);
  };


  const addItem = (item, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {

        return prevItems.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }

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
