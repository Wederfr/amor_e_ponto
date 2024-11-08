import React from 'react';
import './Item.css';

const Item = ({ id, title, price, pictureUrl }) => {
    return (
        <div className="item">
            <img src={pictureUrl} alt={title} />
            <h3>{title}</h3>
            <p>Preço: R${price}</p>
            <button onClick={() => console.log(`Visualizando detalhes do produto: ${title}`)}>
                Veja detalhes do produto
            </button>
        </div>
    );
};

export default Item;