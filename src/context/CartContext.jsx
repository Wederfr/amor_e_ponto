import { crateContext, useState} from "react";

const CartContext  = crateContext();

export defaut function CartProvider({children}){
    const [cart, setCart] = useState([]);

    function addCart(item){
        if (!cart.find(cartItem => cartItem.id==item.id)){
            setCart([...cart, item]);
        }
        else{
            console.log('Item já está no carrinho');
        }
    }
    return(
        <CartContext.provider value={{cart, addToCart}}>
            {children}
        </CartContext.provider>
    );
}