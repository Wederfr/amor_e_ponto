import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './style.css';
import { useCart } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
    const { addCart } = useCart();
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();

    const handleAddToCart = (qtd) => {
        addCart({
            ...item, 
            qtd
        });

        setQuantity(qtd);
    };

    const handleFinalizePurchase = () => {
        navigate('/Cart');
    };

    return (
        <div className="item-detail">
            <img className="item-detail__image" src={item.pictureUrl} alt={item.title} />
            <div className="item-detail__info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>Preço: R${item.price}</p>

                { }
                {quantity === 0 ? (
                    <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
                ) : (

                    <button className="finalize-button" onClick={handleFinalizePurchase}>
                        Finalizar Compra
                    </button>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;