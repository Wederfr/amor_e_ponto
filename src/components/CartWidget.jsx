import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () =>{
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} soze="lg" />
        </div>
    );
};

export default CartWidget;