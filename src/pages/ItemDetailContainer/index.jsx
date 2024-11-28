import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../services/firebase';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const prodRef = doc(db, "produtos", id);
        console.log("prodRef: ", prodRef);

        getDoc(prodRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setItem({
                        ...snapshot.data(),
                        id: snapshot.id
                    });
                    console.log("snapshot: ", snapshot.data());
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="item-detail-container">
            {loading ? <p>Carregando detalhes...</p> : item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;