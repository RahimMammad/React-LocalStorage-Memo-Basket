import React from 'react';

const Product = React.memo(({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.manufacturer} {product.model}</h3>
      <span>{product.price}</span>
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
});

export default Product;
