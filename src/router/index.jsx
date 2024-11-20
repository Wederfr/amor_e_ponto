import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// Components
import NavBar from '../components/NavBar';
// Pages
import ItemListContainer from '../pages/ItemListContainer';
import ItemDetailContainer from '../pages/ItemDetailContainer';
import Contatos from '../pages/Contatos';
import SobreNos from '../pages/SobreNos';
import Cart from '../pages/Cart'; // Importando a página do carrinho
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
                    <Route path="/cart" exact element={<Cart />} /> {/* Nova rota para o carrinho */}
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
};

export default Router;