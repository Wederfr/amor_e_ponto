import React from 'react';
import Router from './router'
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;