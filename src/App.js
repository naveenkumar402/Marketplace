// src/App.js
import React, { useState } from 'react';
import { CartProvider } from './Componenets/CartContext';
import { OrderProvider } from './Componenets/OrderContext';
import Marketplace from './Componenets/Marketplace';
import Order from './Componenets/Order';

const App = () => {
  const [page, setPage] = useState('marketplace');

  const navigateTo = (pageName) => {
    setPage(pageName);
  };

  return (
    <CartProvider>
      <OrderProvider>
        <div>
          <nav>
            <ul>
              <li>
                <button onClick={() => navigateTo('marketplace')}>Marketplace</button>
              </li>
              <li>
                <button onClick={() => navigateTo('order')}>Place Order</button>
              </li>
            </ul>
          </nav>

          <hr />

          {page === 'marketplace' && <Marketplace />}
          {page === 'order' && <Order />}
        </div>
      </OrderProvider>
    </CartProvider>
  );
};

export default App;
