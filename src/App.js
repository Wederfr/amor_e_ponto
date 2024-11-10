import './components/NavBar/style.css';
import NavBar from './components/NavBar/index.jsx';
import ItemListContainer from './components/ItemListContainer';
import './components/ItemListContainer.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SobreNos from './components/SobreNos';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bem-vindo à loja!" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/sobre-nos" element={<SobreNos />} /> { }
      </Routes>
    </div>
  );
}

export default App;