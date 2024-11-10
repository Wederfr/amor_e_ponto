import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import App from '../App';

const AppRouter = () => {
    return (
        <Router>
            <App /> { }
        </Router>
    );
};

export default AppRouter;