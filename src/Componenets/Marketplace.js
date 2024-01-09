
import React, { useState } from 'react';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';
import ViewProduct from './ViewProduct';
import './style.css';
const Marketplace = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>Marketplace</h1>

      <AddProduct addProduct={addProduct} />
      <DeleteProduct products={products} deleteProduct={deleteProduct} />
      <ViewProduct products={products} />
    </div>
  );
};

export default Marketplace;
