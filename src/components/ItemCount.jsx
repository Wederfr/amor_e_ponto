import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };


  return (
    <div className="item-count">
      <div className="counter-controls">
        <button onClick={handleDecrease} disabled={count <= 1}>-</button>
        <span className="counter-value">{count}</span>
        <button onClick={handleIncrease} disabled={count >= stock}>+</button>
      </div>
      <button className="add-button" onClick={handleAdd} disabled={stock === 0}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ItemCount;

