import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: 'Casa nova', price: 100, pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/imagemTeste.jpeg' },
                    { id: 2, title: 'Personalizado', price: 150, pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/personalizado.jpg' },
                    { id: 3, title: 'Porta maternidade', price: 200, pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/porta%20maternidade.jpeg' },
                    { id: 4, title: 'Porta alianças', price: 120, pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/porta%20alian%C3%A7a.jpg' },
                    
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
            {loading ? <p>Carregando itens...</p> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer;