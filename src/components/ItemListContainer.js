import React from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount.js';



const ItemListContainer = ({ greeting }) => {
    const handleAdd = (count) => {
        console.log(`Adicionado ${count} itens ao carrinho`);
    };
    return (
        <div className='ItemListContainer'>
            <h2>{greeting}</h2>{ }
            <ItemCount stock={5} initial={1} onAdd={handleAdd} /> {}
        </div>
    );
};

export default ItemListContainer;