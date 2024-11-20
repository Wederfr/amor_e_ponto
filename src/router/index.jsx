import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// component
import NavBar from '../components/NavBar';
// pages 
import ItemListContainer from '../pages/ItemListContainer';
import ItemDetailContainer from '../pages/ItemDetailContainer';
import Contatos from '../pages/Contatos';
import SobreNos from '../pages/SobreNos';
import CartProvider from '../context/CartContext';

const Router = () => {
    return (
        <CartProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<ItemListContainer greeting="Bem-vindo à loja!" />} />
                <Route path="/item/:id" exact element={<ItemDetailContainer />} />
                <Route path="/sobre-nos" exact element={<SobreNos />} />
                <Route path="/contatos" exact element={<Contatos />} />
            </Routes>
        </BrowserRouter>
        </CartProvider>
    );
};

export default Router;