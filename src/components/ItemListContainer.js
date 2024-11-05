import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const fetchItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: 'Bordado a mão', price: 100, pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/imagemTeste.jpeg' },
                    
                ]);
            }, 2000);
        });

        fetchItems.then((data) => {
            setItems(data);
            setLoading(false);
        });
    }, []);

    const handleAdd = (count) => {
        console.log(`Adicionado ${count} itens ao carrinho`);
    };

    return (
        <div className='ItemListContainer'>
            <h2>{greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={handleAdd} />
            {loading ? <p>Carregando itens...</p> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer;