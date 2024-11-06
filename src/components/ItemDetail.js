import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ title, price, description, pictureUrl }) => {
    return (
        <div className="item-detail">
            <img className="item-detail__image" src={pictureUrl} alt={title} />
            <div className="item-detail__info">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Preço: R${price}</p>
                <button className="item-detail__button">Adicionar ao Carrinho</button>
            </div>
        </div>
    );
};

export default ItemDetail;