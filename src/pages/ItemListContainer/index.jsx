import React, { useEffect, useState } from 'react';
import './style.css';
import ItemList from '../../components/ItemList';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../services/firebase';

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const itemsCollection = collection(db, "produtos");
        getDocs(itemsCollection)
            .then((snapshot) => {
                setItems(snapshot.docs.map(item => ({
                    ...item.data(),
                    id: item.id
                })));
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

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