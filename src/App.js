
import './components/NavBar/style.css';
import NavBar from './components/NavBar/index.jsx';
import ItemListContainer from './components/ItemListContainer';
import './components/ItemListContainer.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting/>
      
      
    </div>
  );
}

export default App;