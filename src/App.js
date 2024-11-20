import React from 'react';
import Router from './router'
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      
      <CartProvider>
        <Router />
      </CartProvider>

    </div>
  );
}

export default App;