import React from 'react';
import useFetchData from '../hooks/useFetch';
import Product from './Product';

const Products = React.memo(({ addToCart }) => {
    const { data, isLoading, error } = useFetchData('products');
  
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          data.map((product) => (
            <Product key={product.id} product={product} addToCart={() => addToCart(product)} />
          ))
        )}
      </div>
    );
  });

export default Products;