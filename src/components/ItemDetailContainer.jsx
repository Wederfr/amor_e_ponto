import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);


    const getItemAsync = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    title: 'Bordado a mão',
                    price: 100,
                    description: 'Bordado personalizado feito a mão com muito carinho em bastidor de 16cm.  Sugestão para casa nova.',
                    pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/imagemTesteG.jpeg'
                });
            }, 2000);
        });
    };

    useEffect(() => {

        getItemAsync()
            .then((data) => {
                setItem(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao carregar item:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="item-detail-container">
            {loading ? <p>Carregando detalhes...</p> : item && <ItemDetail {...item} />}
        </div>
    );
};

export default ItemDetailContainer;