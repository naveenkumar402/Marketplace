// src/components/Marketplace.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import Cart from './ViewProduct';
import Order from './Order';

const Marketplace = () => {
  return (
    <Router>
      <div>
        <h1>Marketplace</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Product</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/order" component={Order} />
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the Marketplace!</p>
  </div>
);

export default Marketplace;
