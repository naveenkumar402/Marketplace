import React from 'react';

const ViewProduct = ({ products }) => {
  return (
    <div>
      <h2>View Products</h2>
        {products.map((product) => (
            <div key={product.id}>
                {product.name} - ₹{product.price}
            </div>
        ))}
    </div>
  );
};

export default ViewProduct;
