import React from 'react';
import Item from '../Item';

const ItemList = ({ items = [] }) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    pictureUrl={item.pictureUrl}
                />
            ))}
        </div>
    );
};

export default ItemList;