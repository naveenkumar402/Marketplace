import React from 'react';

const DeleteProduct = ({ products, deleteProduct }) => {
  return (
    <div>
      <h2>Delete Product</h2>
        {products.map((product) => (
          <div key={product.id}>
            {product.name} - ₹{product.price}{' '}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
        ))}
    </div>
  );
};

export default DeleteProduct;
