import { createContext, useState, useContext } from "react";

export const CartContext  = createContext();

export default function CartProvider({children}){
    const [cart, setCart] = useState([]);

    function cartSize(){
        return cart.length
    }

    function addCart(item){
        if (!cart.find(cartItem => cartItem.id==item.id)){
            setCart([...cart, item]);
        }
        else{
            console.log('Item já está no carrinho');
        }
    }
    return(
        <CartContext.Provider value={{cart, addCart, cartSize}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    // 2. Usar o contexto do contexto criado anteriormente
    const context = useContext(CartContext);
  
    // 3. Verificar se o componente está dentro do provider
    if (!context) {
      throw new Error('Para usar o useCart seu componente precisa estar dentro do CartProvider');
    }
  
    // 4. retornar o contexto para quem tiver permissão
    return context;
}