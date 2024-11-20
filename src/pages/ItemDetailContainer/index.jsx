import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const products = [
        { id: 1, title: 'Bordado Casa nova', price: 100, description: 'Este bordado é feito à mão, com fios de alta qualidade. Você pode optar pelo tamanho em diâmetro do bastidor', pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/imagemTesteG.jpeg' },
        { id: 2, title: 'Bordado personalizado especial', price: 150, description: 'Produto exclusivo, personalizado para ocasiões especiais. Você pode optar pelo tamanho em diâmetro do bastidor', pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/personalizadoG.jpg' },
        { id: 3, title: 'Porta maternidade personalizado', price: 200, description: 'Porta maternidade com detalhes e nome personalizados, perfeito para recepção de bebês. Você pode optar pelo tamanho em diâmetro do bastidor', pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/porta%20maternidadeG.jpg' },
        { id: 4, title: 'Porta alianças delicado', price: 120, description: 'Porta alianças delicado, com bordados feitos a mão para casamentos. Você pode optar pelo tamanho em diâmetro do bastidor', pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/porta%20alian%C3%A7aG.jpg' },
    ];

    useEffect(() => {

        const foundItem = products.find((product) => product.id === parseInt(id));

        setItem(foundItem);
        setLoading(false);
    }, [id]);

    return (
        <div className="item-detail-container">
            {loading ? <p>Carregando detalhes...</p> : item && <ItemDetail item={ item } />}
        </div>
    );
};

export default ItemDetailContainer;