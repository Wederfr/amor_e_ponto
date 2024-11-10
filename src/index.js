import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/index'; // Importando o AppRouter
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter /> {/* Renderizando o AppRouter com o Router configurado */}
  </React.StrictMode>,
  document.getElementById('root')
);

