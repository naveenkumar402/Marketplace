import React, { useState } from 'react';

const AddProduct = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      id: Math.floor(Math.random() * 1000),
      name: productName,
      price: parseFloat(productPrice),
    };

    addProduct(newProduct);
    setProductName('');
    setProductPrice('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <label>
        Product Name:
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </label>
      <label>
        Product Price:
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </label>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
