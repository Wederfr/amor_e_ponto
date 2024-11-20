import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Verifica se um item já está no carrinho
    function isInCart(id) {
        return cart.some(cartItem => cartItem.id === id);
    }

    // Adiciona um item ao carrinho, somando a quantidade caso já exista
    function addItem(item, quantity) {
        if (isInCart(item.id)) {
            setCart(cart.map(cartItem => 
                cartItem.id === item.id 
                ? { ...cartItem, quantity: cartItem.quantity + quantity }
                : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    // Remove um item do carrinho pelo ID
    function removeItem(itemId) {
        setCart(cart.filter(cartItem => cartItem.id !== itemId));
    }

    // Limpa todos os itens do carrinho
    function clear() {
        setCart([]);
    }

    // Retorna o número total de itens no carrinho
    function cartSize() {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartSize }}>
            {children}
        </CartContext.Provider>
    );
}

// Hook personalizado para usar o CartContext
export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('Para usar o useCart seu componente precisa estar dentro do CartProvider');
    }

    return context;
}