import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ title, price, description, pictureUrl }) => {
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();

    const handleAddToCart = (qty) => {
        setQuantity(qty);
    };

    const handleFinalizePurchase = () => {
        navigate('/Cart');
    };

    return (
        <div className="item-detail">
            <img className="item-detail__image" src={pictureUrl} alt={title} />
            <div className="item-detail__info">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Preço: R${price}</p>

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