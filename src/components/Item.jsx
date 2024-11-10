import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, price, pictureUrl }) => {
    return (
        <div className="item">
            <img src={pictureUrl} alt={title} />
            <h3>{title}</h3>
            <p>Preço: R${price}</p>
            <Link to={`/item/${id}`}>
                <button>Veja detalhes do produto</button>
            </Link>
        </div>
    );
};

export default Item;