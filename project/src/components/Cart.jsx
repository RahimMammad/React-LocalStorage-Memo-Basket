import React from 'react';
import Product from './Product';

const Cart = React.memo(({ cart, emptyCart }) => {
    return (
      <div>
        <h1>Cart</h1>
        <button onClick={() => emptyCart()}>Delete Cart</button>
        <div>
          {cart.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }); 

export default Cart;