import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import App from '../App'; // Importar o componente App

const AppRouter = () => {
  return (
    <Router>
      <App /> {/* Colocar o App aqui para que as rotas dentro dele sejam reconhecidas */}
    </Router>
  );
};

export default AppRouter;